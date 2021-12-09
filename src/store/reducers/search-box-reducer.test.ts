import { searchBoxValueUpdated } from '../actions';

const dispatch = jest.fn();

describe('search box reducer', () => {

	it('changes search box value', () => {

		searchBoxValueUpdated(dispatch('jest'));

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith('jest');
	});

});