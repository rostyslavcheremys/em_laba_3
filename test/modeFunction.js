import { calculateMode } from "../ functions/functions.js";

export function modeFunction() {
    const tests = [
        { arr: [1, 2, 2, 3, 4], expected: 2 },
        { arr: [1, 1, 2, 2, 3, 3], expected: null },
        { arr: [4, 4, 1, 2, 2, 3], expected: [2, 4] },
        { arr: [5, 5, 5, 1], expected: 5 },
        { arr: [1, 2, 3, 4, 5], expected: null }
    ];

    console.log("\nПеревірка функції моди:");

    tests.forEach((test, i) => {
        const result = calculateMode(test.arr);
        console.log(
            `Тест ${i + 1}: [${test.arr.join(", ")}] → Отримано: ${JSON.stringify(result)}, Очікувано: ${JSON.stringify(test.expected)}`
        );
    });
}