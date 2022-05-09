export default class ErrorRepository {
  constructor() {
	this.errors = new Map();
	this.errors.set(123, '123 error');
  }

  translate(code) {
  	if(this.errors.has(code)) {
  	  return this.errors.get(code);
  	} else {
  		return 'Unknown error';
  	}
  }
}