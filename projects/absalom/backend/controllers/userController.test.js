const User = require('../models/userModel');
const userController = require('./userController')(User);

describe('userController getMethod', () => {
  const req = {
    query: {
      userId: 'string',
    },
  };
  const res = {
    send: jest.fn(),
    json: jest.fn(),
  };
  test('should call res.json without error in getMethod', () => {
    User.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(false, {});
        }),
      }),
    });

    userController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in getMethod', () => {
    User.findOne = jest.fn().mockReturnValueOnce({
      populate: jest.fn().mockReturnValueOnce({
        exec: jest.fn().mockImplementationOnce((callback) => {
          callback(true, {});
        }),
      }),
    });

    userController.getMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});

describe('userController patchMethod', () => {
  const req = {
    body: {
      userId: 'string',
      updatedUser: {},
    },
  };
  const res = {
    send: jest.fn(),
    json: jest.fn(),
  };
  test('should call res.json without error in patchMethod', () => {
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (query, updatedUser, newOption, callback) => {
        callback(false, {});
      },
    );

    userController.patchMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });

  test('should call res.send when there is an error in patchMethod', () => {
    User.findOneAndUpdate = jest.fn().mockImplementationOnce(
      (query, updatedUser, newOption, callback) => {
        callback(true, {});
      },
    );

    userController.patchMethod(req, res);

    expect(res.json).toHaveBeenCalled();
  });
});
