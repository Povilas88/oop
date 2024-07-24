import { IsValid } from "./IsValid.js";

console.log(IsValid.username('asd'));
console.log(IsValid.username('    '));
console.log(IsValid.username(' asd as das d'));
console.log(IsValid.username('sasdaasdfasdfadfasfasdfasfasdfsadf'));
console.log(IsValid.username('@asdsfgfbasdf'));
console.log(IsValid.username('Česnakas'));


const emailValidationResult = IsValid.email('');
if (emailValidationResult === true) {
    return 'OK';
} else {
    // return string
}