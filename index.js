const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

program
  .name("count-cli")
  .description(
    "It counts number of letters, words or sentences in given input file"
  )
  .version("1.0.0");

const option = program.opts();

program
  .command("count-words")
  .description(
    "Count number of letters, words or sentences in given input file. If no option is specified, command will count number of words in input file."
  )
  .argument("<file>", "File to count number of words")
  .option("-l --letter", "Count number of letters in input file")
  .option("-w --words", "Count number of words in input file")
  .option("-s --sentences", "Count number of sentences in input file")
  .action((file, option) => {
    let total = 0;
    fs.readFile(file, "utf-8", (err, data) => {
      if (option.letter) {
        total = data.split("").length;
        console.log("Total letters: " + total);
      } else if (option.sentences) {
        total = data.split("\n").length;
        console.log("Total sentences: " + total);
      } else {
        total = data.split(" ").length;
        console.log("Total words: " + total);
      }
    });
  })
  .parse(process.argv);
