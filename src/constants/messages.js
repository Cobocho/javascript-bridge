const MESSAGES = Object.freeze({
  welcome: '다리 건너기 게임을 시작합니다.\n',
  bridgeSize: '다리의 길이를 입력해주세요.\n',
  moving: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
  retry: '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
  result: '최종 게임 결과',
  success: '게임 성공 여부: 성공',
  failed: '게임 성공 여부: 실패',
  tryCount: '총 시도한 횟수:',
});

module.exports = MESSAGES;
