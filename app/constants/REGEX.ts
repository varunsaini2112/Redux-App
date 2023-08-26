const REGEX = {
	EMAIL_REGEX: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
	PASSWORD_REGEX:
		/^(?!.*(.)\1{4,})(?=.*[A-Za-z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{10,}$/
};

export default REGEX;
