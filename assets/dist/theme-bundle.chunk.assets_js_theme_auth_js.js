(self["webpackChunkRoots"] = self["webpackChunkRoots"] || []).push([["assets_js_theme_auth_js"],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_common_state_country__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }







var Auth = /*#__PURE__*/function (_PageManager) {
  function Auth(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.validationDictionary = (0,_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_6__.createTranslationDictionary)(context);
    _this.formCreateSelector = 'form[data-create-account-form]';
    _this.recaptcha = $('.g-recaptcha iframe[src]');
    return _this;
  }
  _inheritsLoose(Auth, _PageManager);
  var _proto = Auth.prototype;
  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;
    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"];
    this.loginValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.login-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();
      if (_this2.loginValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;
    this.forgotPasswordValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: '.forgot-password-form input[type="submit"]',
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();
      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var _this$validationDicti = this.validationDictionary,
      enterPassword = _this$validationDicti.password,
      matchPassword = _this$validationDicti.password_match;
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]"),
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    var errorTextMessages = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error);
    _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements, errorTextMessages);
  };
  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var _this4 = this;
    var validationModel = (0,_common_form_validation__WEBPACK_IMPORTED_MODULE_3__["default"])($createAccountForm, this.context);
    var createAccountValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: this.formCreateSelector + " input[type='submit']",
      tap: _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.announceInputErrorMessage
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    createAccountValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      _common_state_country__WEBPACK_IMPORTED_MODULE_1___default()($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (createAccountValidator.getStatus($stateElement) !== 'undefined') {
          createAccountValidator.remove($stateElement);
        }
        if ($last) {
          createAccountValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setStateCountryValidation(createAccountValidator, field, _this4.validationDictionary.field_not_blank);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.cleanUpStateValidation(field);
        }
      });
    }
    if ($emailElement) {
      createAccountValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setEmailValidation(createAccountValidator, emailSelector, this.validationDictionary.valid_email);
    }
    if ($passwordElement && $password2Element) {
      var _this$validationDicti2 = this.validationDictionary,
        enterPassword = _this$validationDicti2.password,
        matchPassword = _this$validationDicti2.password_match;
      createAccountValidator.remove(passwordSelector);
      createAccountValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.Validators.setPasswordValidation(createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements, (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.createPasswordValidationErrorTextObject)(enterPassword, enterPassword, matchPassword, this.passwordRequirements.error));
    }
    $createAccountForm.on('submit', function (event) {
      createAccountValidator.performCheck();
      if (createAccountValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  }

  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */;
  _proto.onReady = function onReady() {
    if (!this.recaptcha.attr('title')) {
      this.recaptcha.attr('title', this.context.recaptchaTitle);
    }
    var $createAccountForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)(this.formCreateSelector);
    var $loginForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.login-form');
    var $forgotPasswordForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.forgot-password-form');
    var $newPasswordForm = (0,_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__.classifyForm)('.new-password-form'); // reset password

    // Injected via auth.html
    this.passwordRequirements = this.context.passwordRequirements;
    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }
    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }
    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }
    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };
  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);


/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");


/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation, requiredMessage) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
  // Required Empty Date field
  if (validation.required && (!validation.min_date || !validation.max_date)) {
    var _formElementId = $formField.attr('id');
    return {
      selector: "#" + _formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + _formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = $formField.find('select[data-label="day"]').val();
        var month = $formField.find('select[data-label="month"]').val();
        var year = val;
        cb(day && month && year);
      },
      errorMessage: requiredMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 * @param errorText provides error validation message
 */
function buildRequiredCheckboxValidation(validation, $formField, errorText) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: errorText
  };
}
function buildRequiredValidation(validation, selector, errorText) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: errorText
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement, errorMessage) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation, errorMessage);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation(validation, $validateableElement, errorMessage));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector, errorMessage));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @param context provides access for error messages on required fields validation
 * @returns {Array}
 */
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__($form, context) {
  var validationsToPerform = [];
  var _createTranslationDic = (0,_utils_translations_utils__WEBPACK_IMPORTED_MODULE_0__.createTranslationDictionary)(context),
    requiredFieldValidationText = _createTranslationDic.field_not_blank;
  $form.find('[data-validation]').each(function (index, input) {
    var getLabel = function getLabel($el) {
      return $el.first().data('validation').label;
    };
    var requiredValidationMessage = getLabel($(input)) + requiredFieldValidationText;
    validationsToPerform = validationsToPerform.concat(buildValidation($(input), requiredValidationMessage));
  });
  return validationsToPerform;
}

/***/ }),

/***/ "./assets/js/theme/common/state-country.js":
/*!*************************************************!*\
  !*** ./assets/js/theme/common/state-country.js ***!
  \*************************************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nTypeError: C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\assets\\js\\theme\\common\\state-country.js: Cannot read properties of undefined (reading 'has')\n    at resolvePath (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\babel-plugin-lodash\\lib\\importModule.js:22:24)\n    at importModule (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\babel-plugin-lodash\\lib\\importModule.js:36:53)\n    at memoized (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\lodash\\memoize.js:62:23)\n    at C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\babel-plugin-lodash\\lib\\index.js:217:63\n    at arrayEach (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\lodash\\_arrayEach.js:15:9)\n    at forEach (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\lodash\\forEach.js:38:10)\n    at C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\babel-plugin-lodash\\lib\\index.js:193:30\n    at arrayEach (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\lodash\\_arrayEach.js:15:9)\n    at forEach (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\lodash\\forEach.js:38:10)\n    at C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\babel-plugin-lodash\\lib\\index.js:181:28\n    at arrayEach (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\lodash\\_arrayEach.js:15:9)\n    at forEach (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\lodash\\forEach.js:38:10)\n    at PluginPass.Program (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\babel-plugin-lodash\\lib\\index.js:170:26)\n    at newFn (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\visitors.js:161:14)\n    at NodePath._call (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\path\\context.js:49:20)\n    at NodePath.call (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\path\\context.js:39:18)\n    at NodePath.visit (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\path\\context.js:85:31)\n    at TraversalContext.visitQueue (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\context.js:89:16)\n    at TraversalContext.visitSingle (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\context.js:65:19)\n    at TraversalContext.visit (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\context.js:112:19)\n    at traverseNode (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\traverse-node.js:22:17)\n    at traverse (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\traverse\\lib\\index.js:52:34)\n    at transformFile (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\core\\lib\\transformation\\index.js:82:31)\n    at transformFile.next (<anonymous>)\n    at run (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\core\\lib\\transformation\\index.js:24:12)\n    at run.next (<anonymous>)\n    at transform (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\@babel\\core\\lib\\transform.js:22:33)\n    at transform.next (<anonymous>)\n    at step (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\gensync\\index.js:261:32)\n    at C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (C:\\Users\\htripathi\\Desktop\\CICDBigcommerce\\CODAL-Harshit+Tripathi+-+Store+(1)-5.0.0\\node_modules\\gensync\\index.js:223:11)");

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTranslationDictionary: () => (/* binding */ createTranslationDictionary)
/* harmony export */ });
var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var i = 0; i < arguments.length; i++) {
    var dictionary = JSON.parse(i < 0 || arguments.length <= i ? undefined : arguments[i]);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9hdXRoX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDUztBQUNuQjtBQUNtQjtBQUNSO0FBTVA7QUFDNkM7QUFBQSxJQUUzRFUsSUFBSSwwQkFBQUMsWUFBQTtFQUNyQixTQUFBRCxLQUFZRSxPQUFPLEVBQUU7SUFBQSxJQUFBQyxLQUFBO0lBQ2pCQSxLQUFBLEdBQUFGLFlBQUEsQ0FBQUcsSUFBQSxPQUFNRixPQUFPLENBQUM7SUFDZEMsS0FBQSxDQUFLRSxvQkFBb0IsR0FBR04sNkZBQTJCLENBQUNHLE9BQU8sQ0FBQztJQUNoRUMsS0FBQSxDQUFLRyxrQkFBa0IsR0FBRyxnQ0FBZ0M7SUFDMURILEtBQUEsQ0FBS0ksU0FBUyxHQUFHQyxDQUFDLENBQUMsMEJBQTBCLENBQUM7SUFBQyxPQUFBTCxLQUFBO0VBQ25EO0VBQUNNLGNBQUEsQ0FBQVQsSUFBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQVMsTUFBQSxHQUFBVixJQUFBLENBQUFXLFNBQUE7RUFBQUQsTUFBQSxDQUVERSx1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDQyxVQUFVLEVBQUU7SUFBQSxJQUFBQyxNQUFBO0lBQ2hDLElBQU1DLFVBQVUsR0FBR3JCLDREQUFLO0lBRXhCLElBQUksQ0FBQ3NCLGNBQWMsR0FBR3hCLHVEQUFHLENBQUM7TUFDdEJ5QixNQUFNLEVBQUUsa0NBQWtDO01BQzFDQyxHQUFHLEVBQUVwQiwrRUFBeUJBO0lBQ2xDLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQ2tCLGNBQWMsQ0FBQ0csR0FBRyxDQUFDLENBQ3BCO01BQ0lDLFFBQVEsRUFBRSx1Q0FBdUM7TUFDakRDLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxFQUFFLEVBQUVDLEdBQUcsRUFBSztRQUNuQixJQUFNQyxNQUFNLEdBQUdULFVBQVUsQ0FBQ1UsS0FBSyxDQUFDRixHQUFHLENBQUM7UUFFcENE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RSxhQUFhLEdBQUdaLE1BQU0sQ0FBQ2EsTUFBTSxDQUFDRixnQkFBZ0IsQ0FBQ2QsWUFBWSxDQUFDLENBQUM7RUFDbkUsSUFBTWlCLGVBQWUsR0FBR2QsTUFBTSxDQUFDQyxJQUFJLENBQUNVLGdCQUFnQixDQUFDZCxZQUFZLENBQUMsQ0FBQyxDQUFDa0IsR0FBRyxDQUFDLFVBQUFDLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUN4RSxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUN5RSxHQUFHLENBQUMsQ0FBQztFQUFBLEVBQUM7RUFFcEcsT0FBT0gsZUFBZSxDQUFDSSxNQUFNLENBQUMsVUFBQ0MsR0FBRyxFQUFFSCxHQUFHLEVBQUViLENBQUMsRUFBSztJQUMzQ2dCLEdBQUcsQ0FBQ0gsR0FBRyxDQUFDLEdBQUdKLGFBQWEsQ0FBQ1QsQ0FBQyxDQUFDO0lBQzNCLE9BQU9nQixHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL1Jvb3RzLy4vYXNzZXRzL2pzL3RoZW1lL2F1dGguanMiLCJ3ZWJwYWNrOi8vUm9vdHMvLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly9Sb290cy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuaW1wb3J0IHtcbiAgICBjbGFzc2lmeUZvcm0sXG4gICAgVmFsaWRhdG9ycyxcbiAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QsXG4gICAgYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbn0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgeyBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgfSBmcm9tICcuL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG4gICAgICAgIHRoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yID0gJ2Zvcm1bZGF0YS1jcmVhdGUtYWNjb3VudC1mb3JtXSc7XG4gICAgICAgIHRoaXMucmVjYXB0Y2hhID0gJCgnLmctcmVjYXB0Y2hhIGlmcmFtZVtzcmNdJyk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJMb2dpblZhbGlkYXRpb24oJGxvZ2luRm9ybSkge1xuICAgICAgICBjb25zdCBsb2dpbk1vZGVsID0gZm9ybXM7XG5cbiAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmxvZ2luLWZvcm0gaW5wdXRbbmFtZT1cImxvZ2luX2VtYWlsXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbG9naW5Nb2RlbC5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC51c2VWYWxpZEVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5sb2dpbi1mb3JtIGlucHV0W25hbWU9XCJsb2dpbl9wYXNzXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gbG9naW5Nb2RlbC5wYXNzd29yZCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclBhc3MsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkbG9naW5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvZ2luVmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dpblZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uKCRmb3Jnb3RQYXNzd29yZEZvcm0pIHtcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICcuZm9yZ290LXBhc3N3b3JkLWZvcm0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFtuYW1lPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC51c2VWYWxpZEVtYWlsLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGZvcmdvdFBhc3N3b3JkRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbigpIHtcbiAgICAgICAgY29uc3QgeyBwYXNzd29yZDogZW50ZXJQYXNzd29yZCwgcGFzc3dvcmRfbWF0Y2g6IG1hdGNoUGFzc3dvcmQgfSA9IHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnk7XG4gICAgICAgIGNvbnN0IG5ld1Bhc3N3b3JkRm9ybSA9ICcubmV3LXBhc3N3b3JkLWZvcm0nO1xuICAgICAgICBjb25zdCBuZXdQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCksXG4gICAgICAgICAgICB0YXA6IGFubm91bmNlSW5wdXRFcnJvck1lc3NhZ2UsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZFwiXWApO1xuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9ICQoYCR7bmV3UGFzc3dvcmRGb3JtfSBpbnB1dFtuYW1lPVwicGFzc3dvcmRfY29uZmlybVwiXWApO1xuICAgICAgICBjb25zdCBlcnJvclRleHRNZXNzYWdlcyA9IGNyZWF0ZVBhc3N3b3JkVmFsaWRhdGlvbkVycm9yVGV4dE9iamVjdChlbnRlclBhc3N3b3JkLCBlbnRlclBhc3N3b3JkLCBtYXRjaFBhc3N3b3JkLCB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLmVycm9yKTtcbiAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXG4gICAgICAgICAgICBuZXdQYXNzd29yZFZhbGlkYXRvcixcbiAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICBwYXNzd29yZDJTZWxlY3RvcixcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXG4gICAgICAgICAgICBlcnJvclRleHRNZXNzYWdlcyxcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICByZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGNyZWF0ZUFjY291bnRGb3JtLCB0aGlzLmNvbnRleHQpO1xuICAgICAgICBjb25zdCBjcmVhdGVBY2NvdW50VmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IGlucHV0W3R5cGU9J3N1Ym1pdCddYCxcbiAgICAgICAgICAgIHRhcDogYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0ICRzdGF0ZUVsZW1lbnQgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nKTtcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdFbWFpbEFkZHJlc3MnXWA7XG4gICAgICAgIGNvbnN0ICRlbWFpbEVsZW1lbnQgPSAkKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IFtkYXRhLWZpZWxkLXR5cGU9J1Bhc3N3b3JkJ11gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHt0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcn0gW2RhdGEtZmllbGQtdHlwZT0nQ29uZmlybVBhc3N3b3JkJ11gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmQyRWxlbWVudCA9ICQocGFzc3dvcmQyU2VsZWN0b3IpO1xuXG4gICAgICAgIGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNyZWF0ZUFjY291bnRWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBmaWVsZCwgdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeS5maWVsZF9ub3RfYmxhbmspO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuY2xlYW5VcFN0YXRlVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGVtYWlsRWxlbWVudCkge1xuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldEVtYWlsVmFsaWRhdGlvbihjcmVhdGVBY2NvdW50VmFsaWRhdG9yLCBlbWFpbFNlbGVjdG9yLCB0aGlzLnZhbGlkYXRpb25EaWN0aW9uYXJ5LnZhbGlkX2VtYWlsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGFzc3dvcmRFbGVtZW50ICYmICRwYXNzd29yZDJFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCB7IHBhc3N3b3JkOiBlbnRlclBhc3N3b3JkLCBwYXNzd29yZF9tYXRjaDogbWF0Y2hQYXNzd29yZCB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcblxuICAgICAgICAgICAgY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgICAgICBjcmVhdGVQYXNzd29yZFZhbGlkYXRpb25FcnJvclRleHRPYmplY3QoZW50ZXJQYXNzd29yZCwgZW50ZXJQYXNzd29yZCwgbWF0Y2hQYXNzd29yZCwgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cy5lcnJvciksXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgJGNyZWF0ZUFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjcmVhdGVBY2NvdW50VmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuXG4gICAgICAgICAgICBpZiAoY3JlYXRlQWNjb3VudFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJlcXVlc3QgaXMgbWFkZSBpbiB0aGlzIGZ1bmN0aW9uIHRvIHRoZSByZW1vdGUgZW5kcG9pbnQgYW5kIHB1bGxzIGJhY2sgdGhlIHN0YXRlcyBmb3IgY291bnRyeS5cbiAgICAgKi9cbiAgICBvblJlYWR5KCkge1xuICAgICAgICBpZiAoIXRoaXMucmVjYXB0Y2hhLmF0dHIoJ3RpdGxlJykpIHtcbiAgICAgICAgICAgIHRoaXMucmVjYXB0Y2hhLmF0dHIoJ3RpdGxlJywgdGhpcy5jb250ZXh0LnJlY2FwdGNoYVRpdGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0ICRjcmVhdGVBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSh0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0ICRsb2dpbkZvcm0gPSBjbGFzc2lmeUZvcm0oJy5sb2dpbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRmb3Jnb3RQYXNzd29yZEZvcm0gPSBjbGFzc2lmeUZvcm0oJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybScpO1xuICAgICAgICBjb25zdCAkbmV3UGFzc3dvcmRGb3JtID0gY2xhc3NpZnlGb3JtKCcubmV3LXBhc3N3b3JkLWZvcm0nKTsgLy8gcmVzZXQgcGFzc3dvcmRcblxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgYXV0aC5odG1sXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XG5cbiAgICAgICAgaWYgKCRsb2dpbkZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uKCRsb2dpbkZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRuZXdQYXNzd29yZEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTmV3UGFzc3dvcmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGZvcmdvdFBhc3N3b3JkRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24oJGZvcmdvdFBhc3N3b3JkRm9ybSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGNyZWF0ZUFjY291bnRGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4vdXRpbHMvdHJhbnNsYXRpb25zLXV0aWxzJztcblxuLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbiwgcmVxdWlyZWRNZXNzYWdlKSB7XG4gICAgLy8gTm8gZGF0ZSByYW5nZSByZXN0cmljdGlvbiwgc2tpcFxuICAgIGlmICh2YWxpZGF0aW9uLm1pbl9kYXRlICYmIHZhbGlkYXRpb24ubWF4X2RhdGUpIHtcbiAgICAgICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgWW91ciBjaG9zZW4gZGF0ZSBtdXN0IGZhbGwgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWluX2RhdGV9IGFuZCAke3ZhbGlkYXRpb24ubWF4X2RhdGV9LmA7XG4gICAgICAgIGNvbnN0IGZvcm1FbGVtZW50SWQgPSAkZm9ybUZpZWxkLmF0dHIoJ2lkJyk7XG4gICAgICAgIGNvbnN0IG1pblNwbGl0ID0gdmFsaWRhdGlvbi5taW5fZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgICBjb25zdCBtYXhTcGxpdCA9IHZhbGlkYXRpb24ubWF4X2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKG1pblNwbGl0WzBdLCBtaW5TcGxpdFsxXSAtIDEsIG1pblNwbGl0WzJdKTtcbiAgICAgICAgY29uc3QgbWF4RGF0ZSA9IG5ldyBEYXRlKG1heFNwbGl0WzBdLCBtYXhTcGxpdFsxXSAtIDEsIG1heFNwbGl0WzJdKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxuICAgICAgICAgICAgdHJpZ2dlcmVkQnk6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3Q6bm90KFtkYXRhLWxhYmVsPVwieWVhclwiXSlgLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJkYXlcIl0nKS52YWwoKSk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9udGggPSBOdW1iZXIoJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cIm1vbnRoXCJdJykudmFsKCkpIC0gMTtcbiAgICAgICAgICAgICAgICBjb25zdCB5ZWFyID0gTnVtYmVyKHZhbCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY2hvc2VuRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoLCBkYXkpO1xuXG4gICAgICAgICAgICAgICAgY2IoY2hvc2VuRGF0ZSA+PSBtaW5EYXRlICYmIGNob3NlbkRhdGUgPD0gbWF4RGF0ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiBpbnZhbGlkTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgLy8gUmVxdWlyZWQgRW1wdHkgRGF0ZSBmaWVsZFxuICAgIGlmICh2YWxpZGF0aW9uLnJlcXVpcmVkICYmICghdmFsaWRhdGlvbi5taW5fZGF0ZSB8fCAhdmFsaWRhdGlvbi5tYXhfZGF0ZSkpIHtcbiAgICAgICAgY29uc3QgZm9ybUVsZW1lbnRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2VsZWN0b3I6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3RbZGF0YS1sYWJlbD1cInllYXJcIl1gLFxuICAgICAgICAgICAgdHJpZ2dlcmVkQnk6IGAjJHtmb3JtRWxlbWVudElkfSBzZWxlY3Q6bm90KFtkYXRhLWxhYmVsPVwieWVhclwiXSlgLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF5ID0gJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cImRheVwiXScpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gJGZvcm1GaWVsZC5maW5kKCdzZWxlY3RbZGF0YS1sYWJlbD1cIm1vbnRoXCJdJykudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IHZhbDtcblxuICAgICAgICAgICAgICAgIGNiKGRheSAmJiBtb250aCAmJiB5ZWFyKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVkTWVzc2FnZSxcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbi8qKlxuICogV2UgdmFsaWRhdGUgY2hlY2tib3hlcyBzZXBhcmF0ZWx5IGZyb20gc2luZ2xlIGlucHV0IGZpZWxkcywgYXMgdGhleSBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIGNoZWNrZWQgb3B0aW9uXG4gKiBmcm9tIG1hbnkgZGlmZmVyZW50IGlucHV0c1xuICogQHBhcmFtICRmb3JtRmllbGRcbiAqIEBwYXJhbSB2YWxpZGF0aW9uXG4gKiBAcGFyYW0gZXJyb3JUZXh0IHByb3ZpZGVzIGVycm9yIHZhbGlkYXRpb24gbWVzc2FnZVxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKHZhbGlkYXRpb24sICRmb3JtRmllbGQsIGVycm9yVGV4dCkge1xuICAgIGNvbnN0IGZvcm1GaWVsZElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgIGNvbnN0IHByaW1hcnlTZWxlY3RvciA9IGAjJHtmb3JtRmllbGRJZH0gaW5wdXQ6Zmlyc3Qtb2YtdHlwZWA7XG4gICAgY29uc3Qgc2Vjb25kYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0YDtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yOiBwcmltYXJ5U2VsZWN0b3IsXG4gICAgICAgIHRyaWdnZXJlZEJ5OiBzZWNvbmRhcnlTZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkKHNlY29uZGFyeVNlbGVjdG9yKS5lYWNoKChpbmRleCwgY2hlY2tib3gpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXJyb3JNZXNzYWdlOiBlcnJvclRleHQsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IsIGVycm9yVGV4dCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHNlbGVjdG9yLFxuICAgICAgICB2YWxpZGF0ZShjYiwgdmFsKSB7XG4gICAgICAgICAgICBjYih2YWwubGVuZ3RoID4gMCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JUZXh0LFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50LCBlcnJvck1lc3NhZ2UpIHtcbiAgICBjb25zdCB2YWxpZGF0aW9uID0gJHZhbGlkYXRlYWJsZUVsZW1lbnQuZGF0YSgndmFsaWRhdGlvbicpO1xuICAgIGNvbnN0IGZpZWxkVmFsaWRhdGlvbnMgPSBbXTtcbiAgICBjb25zdCBmb3JtRmllbGRTZWxlY3RvciA9IGAjJHskdmFsaWRhdGVhYmxlRWxlbWVudC5hdHRyKCdpZCcpfWA7XG5cbiAgICBpZiAodmFsaWRhdGlvbi50eXBlID09PSAnZGF0ZWNob29zZXInKSB7XG4gICAgICAgIGNvbnN0IGRhdGVWYWxpZGF0aW9uID0gYnVpbGREYXRlVmFsaWRhdGlvbigkdmFsaWRhdGVhYmxlRWxlbWVudCwgdmFsaWRhdGlvbiwgZXJyb3JNZXNzYWdlKTtcblxuICAgICAgICBpZiAoZGF0ZVZhbGlkYXRpb24pIHtcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChkYXRlVmFsaWRhdGlvbik7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHZhbGlkYXRpb24ucmVxdWlyZWQgJiYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2NoZWNrYm94c2VsZWN0JyB8fCB2YWxpZGF0aW9uLnR5cGUgPT09ICdyYWRpb3NlbGVjdCcpKSB7XG4gICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKHZhbGlkYXRpb24sICR2YWxpZGF0ZWFibGVFbGVtZW50LCBlcnJvck1lc3NhZ2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IsIGVycm9yTWVzc2FnZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmllbGRWYWxpZGF0aW9ucztcbn1cblxuLyoqXG4gKiBCdWlsZHMgdGhlIHZhbGlkYXRpb24gbW9kZWwgZm9yIGR5bmFtaWMgZm9ybXNcbiAqIEBwYXJhbSAkZm9ybVxuICogQHBhcmFtIGNvbnRleHQgcHJvdmlkZXMgYWNjZXNzIGZvciBlcnJvciBtZXNzYWdlcyBvbiByZXF1aXJlZCBmaWVsZHMgdmFsaWRhdGlvblxuICogQHJldHVybnMge0FycmF5fVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoJGZvcm0sIGNvbnRleHQpIHtcbiAgICBsZXQgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSBbXTtcbiAgICBjb25zdCB7IGZpZWxkX25vdF9ibGFuazogcmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IH0gPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRMYWJlbCA9ICRlbCA9PiAkZWwuZmlyc3QoKS5kYXRhKCd2YWxpZGF0aW9uJykubGFiZWw7XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkVmFsaWRhdGlvbk1lc3NhZ2UgPSBnZXRMYWJlbCgkKGlucHV0KSkgKyByZXF1aXJlZEZpZWxkVmFsaWRhdGlvblRleHQ7XG5cbiAgICAgICAgdmFsaWRhdGlvbnNUb1BlcmZvcm0gPSB2YWxpZGF0aW9uc1RvUGVyZm9ybS5jb25jYXQoYnVpbGRWYWxpZGF0aW9uKCQoaW5wdXQpLCByZXF1aXJlZFZhbGlkYXRpb25NZXNzYWdlKSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gdmFsaWRhdGlvbnNUb1BlcmZvcm07XG59XG4iLCJjb25zdCBUUkFOU0xBVElPTlMgPSAndHJhbnNsYXRpb25zJztcbmNvbnN0IGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkgPSAoZGljdGlvbmFyeSkgPT4gISFPYmplY3Qua2V5cyhkaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pLmxlbmd0aDtcbmNvbnN0IGNob29zZUFjdGl2ZURpY3Rpb25hcnkgPSAoLi4uZGljdGlvbmFyeUpzb25MaXN0KSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaWN0aW9uYXJ5SnNvbkxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgZGljdGlvbmFyeSA9IEpTT04ucGFyc2UoZGljdGlvbmFyeUpzb25MaXN0W2ldKTtcbiAgICAgICAgaWYgKGlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkoZGljdGlvbmFyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiBkaWN0aW9uYXJ5O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuLyoqXG4gKiBkZWZpbmVzIFRyYW5zbGF0aW9uIERpY3Rpb25hcnkgdG8gdXNlXG4gKiBAcGFyYW0gY29udGV4dCBwcm92aWRlcyBhY2Nlc3MgdG8gMyB2YWxpZGF0aW9uIEpTT05zIGZyb20gZW4uanNvbjpcbiAqIHZhbGlkYXRpb25fbWVzc2FnZXMsIHZhbGlkYXRpb25fZmFsbGJhY2tfbWVzc2FnZXMgYW5kIGRlZmF1bHRfbWVzc2FnZXNcbiAqIEByZXR1cm5zIHtPYmplY3R9XG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkgPSAoY29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRmFsbGJhY2tEaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiB9ID0gY29udGV4dDtcbiAgICBjb25zdCBhY3RpdmVEaWN0aW9uYXJ5ID0gY2hvb3NlQWN0aXZlRGljdGlvbmFyeSh2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OKTtcbiAgICBjb25zdCBsb2NhbGl6YXRpb25zID0gT2JqZWN0LnZhbHVlcyhhY3RpdmVEaWN0aW9uYXJ5W1RSQU5TTEFUSU9OU10pO1xuICAgIGNvbnN0IHRyYW5zbGF0aW9uS2V5cyA9IE9iamVjdC5rZXlzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSkubWFwKGtleSA9PiBrZXkuc3BsaXQoJy4nKS5wb3AoKSk7XG5cbiAgICByZXR1cm4gdHJhbnNsYXRpb25LZXlzLnJlZHVjZSgoYWNjLCBrZXksIGkpID0+IHtcbiAgICAgICAgYWNjW2tleV0gPSBsb2NhbGl6YXRpb25zW2ldO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgIH0sIHt9KTtcbn07XG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJzdGF0ZUNvdW50cnkiLCJub2QiLCJ2YWxpZGF0aW9uIiwiZm9ybXMiLCJjbGFzc2lmeUZvcm0iLCJWYWxpZGF0b3JzIiwiY3JlYXRlUGFzc3dvcmRWYWxpZGF0aW9uRXJyb3JUZXh0T2JqZWN0IiwiYW5ub3VuY2VJbnB1dEVycm9yTWVzc2FnZSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsIkF1dGgiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidmFsaWRhdGlvbkRpY3Rpb25hcnkiLCJmb3JtQ3JlYXRlU2VsZWN0b3IiLCJyZWNhcHRjaGEiLCIkIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJyZWdpc3RlckxvZ2luVmFsaWRhdGlvbiIsIiRsb2dpbkZvcm0iLCJfdGhpczIiLCJsb2dpbk1vZGVsIiwibG9naW5WYWxpZGF0b3IiLCJzdWJtaXQiLCJ0YXAiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlbWFpbCIsImVycm9yTWVzc2FnZSIsInVzZVZhbGlkRW1haWwiLCJwYXNzd29yZCIsImVudGVyUGFzcyIsIm9uIiwiZXZlbnQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJwcmV2ZW50RGVmYXVsdCIsInJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uIiwiJGZvcmdvdFBhc3N3b3JkRm9ybSIsIl90aGlzMyIsImZvcmdvdFBhc3N3b3JkVmFsaWRhdG9yIiwicmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24iLCJfdGhpcyR2YWxpZGF0aW9uRGljdGkiLCJlbnRlclBhc3N3b3JkIiwibWF0Y2hQYXNzd29yZCIsInBhc3N3b3JkX21hdGNoIiwibmV3UGFzc3dvcmRGb3JtIiwibmV3UGFzc3dvcmRWYWxpZGF0b3IiLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJlcnJvclRleHRNZXNzYWdlcyIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwiZXJyb3IiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJyZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IiLCIkY3JlYXRlQWNjb3VudEZvcm0iLCJfdGhpczQiLCJ2YWxpZGF0aW9uTW9kZWwiLCJjcmVhdGVBY2NvdW50VmFsaWRhdG9yIiwiJHN0YXRlRWxlbWVudCIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwiJHBhc3N3b3JkRWxlbWVudCIsIiRwYXNzd29yZDJFbGVtZW50IiwiJGxhc3QiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwicmVtb3ZlIiwiaXMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiZmllbGRfbm90X2JsYW5rIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkX2VtYWlsIiwiX3RoaXMkdmFsaWRhdGlvbkRpY3RpMiIsIm9uUmVhZHkiLCJhdHRyIiwicmVjYXB0Y2hhVGl0bGUiLCIkbmV3UGFzc3dvcmRGb3JtIiwibGVuZ3RoIiwiZGVmYXVsdCIsImJ1aWxkRGF0ZVZhbGlkYXRpb24iLCIkZm9ybUZpZWxkIiwicmVxdWlyZWRNZXNzYWdlIiwibWluX2RhdGUiLCJtYXhfZGF0ZSIsImludmFsaWRNZXNzYWdlIiwiZm9ybUVsZW1lbnRJZCIsIm1pblNwbGl0Iiwic3BsaXQiLCJtYXhTcGxpdCIsIm1pbkRhdGUiLCJEYXRlIiwibWF4RGF0ZSIsInRyaWdnZXJlZEJ5IiwiZGF5IiwiTnVtYmVyIiwiZmluZCIsIm1vbnRoIiwieWVhciIsImNob3NlbkRhdGUiLCJyZXF1aXJlZCIsImJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24iLCJlcnJvclRleHQiLCJmb3JtRmllbGRJZCIsInByaW1hcnlTZWxlY3RvciIsInNlY29uZGFyeVNlbGVjdG9yIiwiZWFjaCIsImluZGV4IiwiY2hlY2tib3giLCJjaGVja2VkIiwiYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24iLCJidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbiIsImZvcm1GaWVsZFNlbGVjdG9yIiwibGFiZWwiLCJtaW4iLCJtYXgiLCJuYW1lIiwibnVtYmVyVmFsIiwiYnVpbGRWYWxpZGF0aW9uIiwiJHZhbGlkYXRlYWJsZUVsZW1lbnQiLCJkYXRhIiwiZmllbGRWYWxpZGF0aW9ucyIsInR5cGUiLCJkYXRlVmFsaWRhdGlvbiIsInB1c2giLCJlbGVtZW50IiwiJGlucHV0RWxlbWVudCIsInRhZ05hbWUiLCJnZXQiLCJpbnB1dE5hbWUiLCJlbGVtZW50U2VsZWN0b3IiLCIkZm9ybSIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiX2NyZWF0ZVRyYW5zbGF0aW9uRGljIiwicmVxdWlyZWRGaWVsZFZhbGlkYXRpb25UZXh0IiwiaW5wdXQiLCJnZXRMYWJlbCIsIiRlbCIsImZpcnN0IiwicmVxdWlyZWRWYWxpZGF0aW9uTWVzc2FnZSIsImNvbmNhdCIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJpIiwiYXJndW1lbnRzIiwiSlNPTiIsInBhcnNlIiwidW5kZWZpbmVkIiwidmFsaWRhdGlvbkRpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04iLCJ2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIiwiYWN0aXZlRGljdGlvbmFyeSIsImxvY2FsaXphdGlvbnMiLCJ2YWx1ZXMiLCJ0cmFuc2xhdGlvbktleXMiLCJtYXAiLCJrZXkiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwic291cmNlUm9vdCI6IiJ9