import Pricing from '../4-pricing';
import Currency from '../3-currency';

const amount = new Pricing(100, new Currency('EUR', 'Euro'));
console.log(amount);
console.log(amount.displayFullPrice());
