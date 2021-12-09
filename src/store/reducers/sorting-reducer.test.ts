import { sortingTypeUpdated } from '../actions';

const dispatch = jest.fn();

describe('sorting reducer', () => {

	it('changes current value', () => {

		sortingTypeUpdated(dispatch('newest'));

		expect(dispatch).toHaveBeenCalledTimes(1);
		expect(dispatch).toHaveBeenCalledWith('newest');
	});

});