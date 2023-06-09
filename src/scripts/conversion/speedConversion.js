const speedConversion = (value, speed) => {
    const speeds = {
        km: {
            kilometers: (values) => values,
            miles: (values) => (+(values / 1.609344).toFixed(5)),
            knots: (values) => (+(values / 1.852).toFixed(5)),
        },
        mil: {
            miles: (values) => values,
            kilometers: (values) => (+(values * 1.609344).toFixed(5)),
            knots: (values) => (+(values / 1.150779).toFixed(5)),
        },
        knots: {
            knots: (values) => values,
            miles: (values) => (+(values * 1.150779).toFixed(5)),
            kilometers: (values) => (+(values * 1.852).toFixed(5)),
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
