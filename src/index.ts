import { input } from '@inquirer/prompts';

async function go() {
  const answer = await input({ message: 'Enter your name' });
}

go();
