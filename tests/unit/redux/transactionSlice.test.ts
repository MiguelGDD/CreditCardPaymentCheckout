import {
  startTransaction,
  completeTransaction,
} from '../../../src/redux/slices/transactionSlice';

describe('transactionSlice actions', () => {
  it('should create a startTransaction action', () => {
    const action = startTransaction({id: 'tx123', status: 'pending'});
    expect(action).toEqual({
      type: 'transactions/startTransaction',
      payload: {id: 'tx123', status: 'pending'},
    });
  });

  it('should create a completeTransaction action', () => {
    const action = completeTransaction({status: 'success'});
    expect(action).toEqual({
      type: 'transactions/completeTransaction',
      payload: {status: 'success'},
    });
  });
});
