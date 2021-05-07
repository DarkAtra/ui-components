export const mapKeys = <K>(obj: K, mapper: (key: keyof K) => string = a => a as string) => {
    return Object.entries(obj)
        .reduce((values, [key, value]: [string, K]) => ({...values, [mapper(key as keyof K)]: value}), {});
};

export const mapValues = <V, TV>(obj: { [key in any]: V }, mapper: (value: V) => TV = a => a as unknown as TV) => {
    return Object.entries(obj)
        .reduce((values, [key, value]: [string, V]) => ({...values, [key]: mapper(value)}), {});
};
