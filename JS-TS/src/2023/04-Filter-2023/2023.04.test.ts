test('should take old men older then 90', () => {
    const ages2023 = [18, 20, 22, 1, 100, 90, 15, 46, 75];

    const predicate2023 = (age: number) => age > 90

    const oldAges2023 = ages2023.filter(predicate2023);

    expect(oldAges2023.length).toBe(1)
    expect(oldAges2023[0]).toBe(100)
})