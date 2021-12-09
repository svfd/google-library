import { categoryValueUpdated } from '../actions';

const dispatch = jest.fn();

beforeEach(() => {
	dispatch.mockClear();
});

describe('categories reducer', () => {

	it('set new value to category', () => {

		categoryValueUpdated(dispatch('art'));

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith('art');
	});

});