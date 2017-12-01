/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/
/*eslint-disable one-var*/
/*eslint-disable require-jsdoc*/

export default {
  
  log: (content) => {
    let logContent    = {
          time: new Date(),
          content
        },
        logContentTxt = JSON.stringify(logContent);
    
    console.log(logContentTxt);
  }
};
