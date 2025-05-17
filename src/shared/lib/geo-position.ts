export const getUserPosition = (): Promise<[number, number]> => {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error("Geolocation не поддерживается"));
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                resolve([latitude, longitude]);
            },
            (err) => {
                reject(new Error(`Ошибка геолокации: ${err.message}`));
            }
        );
    });
};