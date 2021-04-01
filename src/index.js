module.exports = function check(str, bracketsConfig) {
    let stack = [];

    for (let c of str) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (c == bracketsConfig[i][0]) {
                stack.push(c);
            }

            if (c == bracketsConfig[i][1]) {
                if (stack.length == 0) {
                    return false;
                }

                if (stack[stack.length -1] == bracketsConfig[i][0]) {
                    stack.pop();
                }
            }
        }
    }

    return stack.length == 0;
}






/*
{
    let counters = [];
    counters.length = bracketsConfig.length;
    for (let i = 0; i < counters.length; i++) {
        counters[i] = 0;
    }

    for (let c of str) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if (c == bracketsConfig[i][0]) {
              counters[i] = counters[i] + 1;
            }
            if (c == bracketsConfig[i][1]) {
              counters[i] = counters[i] - 1;
            }
            if (counters[i] < 0) {
              return false;
            }
        }
      }

      for (let i = 0; i < counters.length; i++) {
          if (counters[i] != 0 ) {
              return false;
          }
      }
      return true;
  }
  */
