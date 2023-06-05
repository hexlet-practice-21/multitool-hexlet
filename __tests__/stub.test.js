// @ts-check

import {expect, jest, test} from '@jest/globals';
import returnTrue from "../src/scripts/empty.js";


test('stub', () => {
    expect(returnTrue()).toBe(true);
});

