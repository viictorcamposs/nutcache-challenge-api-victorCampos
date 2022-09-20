/* eslint-disable @typescript-eslint/no-var-requires */
const { deepStrictEqual } = require("assert");

const { AppError } = require("./AppError");

const mocks = {
  STATUS_CODE_DEFAULT: 400,
  STATUS_CODE_INTERNAL_ERROR: 500,
  ERROR_MESSAGE:
    "It appears that an internal server error has occurred. Please try again.",
};

(async () => {
  {
    // ? deve retornar com default "400" quando não passar param "statusCode"
    const result = new AppError().statusCode;

    deepStrictEqual(result, 400);
  }

  {
    // ? deve retornar valor inserido quando criar nova instância do AppError passando "statusCode"
    const result = new AppError(
      mocks.ERROR_MESSAGE,
      mocks.STATUS_CODE_INTERNAL_ERROR
    );

    deepStrictEqual(result.statusCode, 500);
  }
})();
