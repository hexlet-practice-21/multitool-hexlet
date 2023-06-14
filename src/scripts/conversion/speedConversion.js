const speedConversion = (value, speed) => {
    const speeds = {
        Kilometers: {
            Kilometers: (values) => values,
            Miles: (values) => (+(values / 1.609344).toFixed(5)),
            Knots: (values) => (+(values / 1.852).toFixed(5)),
        },
        Miles: {
            Miles: (values) => values,
            Kilometers: (values) => (+(values * 1.609344).toFixed(5)),
            Knots: (values) => (+(values / 1.150779).toFixed(5)),
        },
        Knots: {
            Knots: (values) => values,
            Miles: (values) => (+(values * 1.150779).toFixed(5)),
            Kilometers: (values) => (+(values * 1.852).toFixed(5)),
        },
    };
    if (speed in speeds) {
        const results = {};
        Object.keys(speeds[speed]).forEach((key) => {
            results[key] = speeds[speed][key](value);
        });
        return results;
    }
    return null;
};



export default speedConversion;
