import readline from 'readline';
import { stdin as input, stdout as output } from 'process';
import { computeX, isValid } from './logic';

const rl = readline.createInterface({ input, output });

const checkValue = (value: string): boolean | undefined => {
  if(!isValid(value)) {
    console.log("invalid value");
    rl.close();
    return true;
  }
}

rl.question('Please enter the number of kilometers away from the pile(D) ', (D) => {
  if(checkValue(D)) return;
  rl.question('Please enter the maximum number of kilograms of nuts for carring(C) ', (C) => {
    if(checkValue(C)) return;
    const c = parseFloat(C);
    rl.question('Please enter the kilogram of nuts consuming during travel(F) ', (F) => {
      if(checkValue(F)) return;
      const f = parseFloat(F);
      rl.question('Please enter the total amount of kilograms of nuts in the pule(N) ', (N) => {
        if(checkValue(F)) return;
        const X = computeX(parseFloat(D), f, parseFloat(N), c);
        console.log(`The maximum number of nuts that can be transported is: ${X}`);
        rl.close();
      });
    });
  });
});