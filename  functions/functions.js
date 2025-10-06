export function calculateMean(array) {
    const sum = array.reduce((acc, val) => acc + val, 0);
    return sum / array.length;
}

export function calculateMedian(array) {
    const sorted = [...array].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle + 1] + sorted[middle]) / 2;
    } else {
        return sorted[middle];
    }
}

export function calculateMode(array) {
    const counts = {};

    array.forEach(num => {
        counts[num] = (counts[num] || 0) + 1;
    });

    let maxCount = 0;
    let modes = [];

    for (const num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            modes = [Number(num)];
        } else if (counts[num] === maxCount) {
            modes.push(Number(num));
        }
    }

    if (modes.length === Object.keys(counts).length) {
        return null;
    }

    return modes.length === 1 ? modes[0] : modes;
}