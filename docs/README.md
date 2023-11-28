# 도메인 구현

[ ] Deck

- [ ] `WeakDeck`은 `trampled` 호출 시 `state`가 `X`가 된다.
- [ ] `HardDeck`은 `trampled` 호출 시 `state`가 `O`가 된다.

[ ] Stack

- [ ] `Stack`은 입력받은 `lanes`를 기반으로 `stack`을 생성한다.
- [ ] `through`는 입력받은 `lane`의 `stack` `trampled`한다.

- [ ] Bridge

- [ ] `Bridge`는 입력받은 `length`만큼 `Stack`을 생성한다.
- [ ] `cross` 호출시 `index`의 `stack`의 입력받은 `lane`을 `through`한다.
- [ ] `showResult`를 호출 시 결과가 객체로 반환된다.
