type Point = { x: number, y: number };



function adj(m: number[]) { // Compute the adjugate of m
    return [
        m[4] * m[8] - m[5] * m[7], m[2] * m[7] - m[1] * m[8], m[1] * m[5] - m[2] * m[4],
        m[5] * m[6] - m[3] * m[8], m[0] * m[8] - m[2] * m[6], m[2] * m[3] - m[0] * m[5],
        m[3] * m[7] - m[4] * m[6], m[1] * m[6] - m[0] * m[7], m[0] * m[4] - m[1] * m[3]
    ];
}

function multmm(a: number[], b: number[]) { // multiply two matrices
    var c = Array(9);
    for (var i = 0; i < 3; ++i) {
        for (var j = 0; j < 3; ++j) {
            var sum = 0;
            for (var k = 0; k < 3; ++k) {
                sum += a[3 * i + k] * b[3 * k + j];
            }
            c[3 * i + j] = sum;
        }
    }
    return c;
}

function multmv(m: number[], v: number[]) { // multiply matrix and vector
    return [
        m[0] * v[0] + m[1] * v[1] + m[2] * v[2],
        m[3] * v[0] + m[4] * v[1] + m[5] * v[2],
        m[6] * v[0] + m[7] * v[1] + m[8] * v[2]
    ];
}

function basisToPoints(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number) {
    var m = [
        x1, x2, x3,
        y1, y2, y3,
        1, 1, 1
    ];
    var v = multmv(adj(m), [x4, y4, 1]);
    return multmm(m, [
        v[0], 0, 0,
        0, v[1], 0,
        0, 0, v[2]
    ]);
}

function general2DProjection(
    x1s: number, y1s: number, x1d: number, y1d: number,
    x2s: number, y2s: number, x2d: number, y2d: number,
    x3s: number, y3s: number, x3d: number, y3d: number,
    x4s: number, y4s: number, x4d: number, y4d: number
) {
    var s = basisToPoints(x1s, y1s, x2s, y2s, x3s, y3s, x4s, y4s);
    var d = basisToPoints(x1d, y1d, x2d, y2d, x3d, y3d, x4d, y4d);
    return multmm(d, adj(s));
}

export function getPerspectiveTransform(
    src: [Point, Point, Point, Point],
    dst: [Point, Point, Point, Point]
) {
    // Src points usually: (0,0), (w,0), (0,h), (w,h) - Order matters!
    // Standard order: TL, TR, BR, BL
    const p = general2DProjection(
        src[0].x, src[0].y, dst[0].x, dst[0].y,
        src[1].x, src[1].y, dst[1].x, dst[1].y,
        src[2].x, src[2].y, dst[2].x, dst[2].y,
        src[3].x, src[3].y, dst[3].x, dst[3].y
    );

    // Convert 3x3 to 4x4 for CSS3D
    // Standard Column-Major Matrix for matrix3d()
    // [0] [3] [6] (m11, m21, m41)
    // [1] [4] [7] (m12, m22, m42)
    // [2] [5] [8] (m14, m24, m44)

    // Normalize by p[8] to ensure scale is correct
    const n = p[8];
    const m = p.map(x => x / n);

    return [
        m[0], m[3], 0, m[6],
        m[1], m[4], 0, m[7],
        0, 0, 1, 0,
        m[2], m[5], 0, m[8]
    ].join(", ");
}
