const spinner = ["|", "/", "-", "\\", "|"];

for (let i = 0; i < spinner.length - 1; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${spinner[i]}   `);
  }, 100 + 200 * i);
}
