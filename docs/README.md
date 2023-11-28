# 도메인 구현

[x] Deck

- [x] `WeakDeck`은 `trampled` 호출 시 `X`를 반환한다.
- [x] `HardDeck`은 `trampled` 호출 시 `O`를 반환한다.

[x] Stack

- [x] `through`는 입력받은 `lane`의 `stack`을 `trampled`한다.

[x] Bridge

- [x] `cross` 호출시 입력받은 `lane`을 `through`한다.
- [x] `isCompleted` 호출시 완료 여부를 반환한다.

[x] BridgeMaker

- [x] `makeBridge` 호출시 입력받은 `size`만큼 `generateRandomNumber`를 활용하여 `Bridge`의 조건을 생성한다.

[ ] BridgeGame

- [ ] 생성시 입력받은 `size`를 기반으로 `Bridge`를 생성한다.
- [ ] `move` 호출시 입력받은 `lane`을 생성된 `bridge`에 `cross`한다.
- [ ] `retry` 호출시 `Bridge`를 초기화한다.
- [ ] `isCompleted` 호출시 완료 여부를 반환한다.
