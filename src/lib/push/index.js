/*eslint-disable no-undef*/
/*eslint-disable no-unused-vars*/
/*eslint-disable one-var*/
/*eslint-disable require-jsdoc*/

import logger from '../logger';

logger.log('初始化推送组件');

function plusReady () {
  window.removeEventListener('plusready', plusReady);
}

if (window.plus) {
  logger.log('存在plus对象, 使用igetui');
  
  let clientInfo   = plus.push.getClientInfo();
  let { clientId } = clientInfo;
  logger.log(JSON.stringify(clientInfo));
  
} else {
  plusReady();
}
window.addEventListener('plusready', plusReady, false);

export default {
  // onMessage  : () => {},
  // pushMessage: () => {
  //
  // }
};
