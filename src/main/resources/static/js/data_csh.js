/*
  0, 0
  1, 1
  2, 2
  3, 3
  4, 4
  5, 5
  6, 6
  7, 7
  8, 8
  9, 9
  10, 10
  10, 11}
*/
const qnaList = [
  {
    //외향형-내향형(E-I)
    q: '1. 데이트가 없는 주말, 나는 ? ',
    a: [
      { answer: 'a. 침대없이는 못 살아요!', type: [9, 10, 11, 12, 13, 14, 15] }, //(내향형) I
      { answer: 'b. 친구들에게 연락해서 약속을 잡는다.', type: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, //(외향형) E

    // q: '1. 이성 사이에 진정한 친구는 있다, 없다?',
    // a: [
    //   { answer: 'a. 이성 사이에 친구가 어딨어? 절대 없어', type: [1, 2, 4, 9] },
    //   { answer: 'b. 친구 있지, 절대 이성으로만 안 보일뿐', type: [0, 3, 6, 5, 10, 8] },
      // { answer: 'c. 난 잘 모르겠어..', type: [7, 10 ] },
    ]
  },
  {
    //외향형-내향형(E-I)
    q: '2. 친구의 소개로 소개팅에 왔어요. ',
    a: [
      { answer: 'a. 먼저 말 걸면서 분위기를 띄운다.', type: [0, 1, 2, 3, 4, 5, 6, 7, 8] }, //(외향형) E
      { answer: 'b. 조금 어색한데.. 말을 걸어올 때까지 기다리고 본다. ', type: [9, 10, 11, 12, 13, 14, 15] }, //(내향형) I

    // q: '2. 좋아하는 사람이 생겨 연락하고자 한다 ',
    // a: [
    //   { answer: 'a. 바로 먼저 연락한다.', type: [0, 3, 2, 8] },
    //   { answer: 'b. 언제 연락할지, 어떻게 말할지 심사숙고하여 연락한다.', type: [1, 6, 5, 10] },
      // { answer: 'c. 상대방에게 먼저 연락 올 때까지 기다린다.', type: [7, 4, 9, 10] },
    ]
  },
  {
    //외향형-내향형(E-I)
    q: '3. 데이트 중 길에서 친구의 연인을 만났다면?',
    a: [
      { answer: 'a. 아는 사람이다! 자연스럽게 웃으며 인사한다.', type: [0, 1, 2, 3, 4, 5, 6, 7, 8]  }, //(외향형) E
      { answer: 'b. 모르는 척, 무생물이 되어 조용히 지나간다.', type: [9, 10, 11, 12, 13, 14, 15] }, //(내향형) I
    // q: '3. 당신의 고백 스타일은?',
    // a: [
    //   { answer: 'a. 호감이 보이면 바로 고백한다', type: [1, 3, 2, 10, 8] },
    //   { answer: 'b. 상대방이 고백할 때까지 기다린다', type: [7, 9, 10] },
      // { answer: 'c. 완벽한 분위기, 완벽한 타이밍에서 고백한다.', type: [0, 6, 5, 4] }
    ]
  },
  {
    //감각형-직관형(N-S)
    q: '4. 데이트 중 맛있어 보이는 밥집을 발견했다!',
    a: [
      { answer: 'a. 음~ 맛집의 기운이 느껴진다. 오늘은 여기야. ', type: [4, 5, 6, 7, 12, 13, 14, 15] }, //(직관형) N
      { answer: 'b. 유명하기도 하고, 리뷰도 많으니 맛은 보장되어 있겠군.', type: [0, 1, 2, 3, 8, 9, 10, 11] }, //(감각형) S

    // q: '4. 호감가는 고백 멘트를 고른다면?',
    // a: [
    //   { answer: 'a. 박력 그 자체, "야 나랑 사귀자" ', type: [1, 2, 4 ] },
    //   { answer: 'b. 섬세한 "나 너 많이 좋아해, 나랑 사귈래?" ', type: [7, 10, 8, 9, 10 ] },
      // { answer: 'c. 센스있는 "우리 내일은 연인으로 만날까요" ', type: [0, 3, 6, 5 ] },
    ]
  },
  {
    //감각형-직관형(N-S)
    q: '5. 오늘 본 영화를 궁금해하는 친구/연인과 이야기할 때?',
    a: [
      { answer: 'a. 세상에 좀비 바이러스가 퍼져서 주인공이 치료제를 구하는 영화야. ', type: [0, 1, 2, 3, 8, 9, 10, 11] }, //(감각형) S
      { answer: 'b. 좀비랑 싸우는데 주인공이 완전 멋져!! 보는 내내 소름 돋았어.', type: [4, 5, 6, 7, 12, 13, 14, 15] }, //(직관형) N

    // q: '5. 오늘 연인과 첫 데이트 하는 날이다. 첫 날 허용할 수 있는 스킨십의 범위는?',
    // a: [
    //   { answer: 'a. 쑥스러워.. 손 잡기 정도??', type: [1, 7, 10, 4, 9 ] },
    //   { answer: 'b. 요즘 시대가 어느 때인데, 가벼운 뽀뽀까지 가능이야', type: [0, 3, 6, 10]},
      // { answer: 'c. 어차피 내 연인인데 왜?? 모든 스킨십 다 돼!', type: [2, 5, 8] },
    ]
  },

  {
    //감각형-직관형(N-S)
    q: '6. 오늘은 기념일, 연인에게 줄 선물은?',
    a: [
      { answer: 'a. 실용성은 없지만 소중하고 기억에 남을 만한 선물로 ', type: [4, 5, 6, 7, 12, 13, 14, 15] }, //(직관형) N
      { answer: 'b. 요즘 그게 필요하다던데? 가장 필요할 것 같은 선물로 ', type: [0, 1, 2, 3, 8, 9, 10, 11] }, //(감각형) S

    // q: '6. 기념일이 다가온다. 당신은 어떻게 할 것인가? (ex - 100, 200일)',
    // a: [
    //   { answer: 'a. 무슨 기념일이야, 그냥 평소처럼 해', type: [4, 9, 10 ] },
    //   { answer: 'b. 맛있는 밥이나 사줄까? 아니면 꽃이라도?', type: [0, 3, 6, 10 ] },
      // { answer: 'c. 이미 깜짝 이벤트 다 준비해놨어', type: [1, 7, 2, 5, 8 ] },
    ]
  },
  {
    //사고형-감정형(T-F)
    q: '7. 연인과 \'사소한 일\'로 다퉜을 때?',
    a: [
      { answer: 'a. 아니!? 말을 왜 그렇게 해? ', type: [2, 3, 4, 5, 10, 11, 12, 13] }, //(감정형) F
      { answer: 'b. 그 점은 네가 잘못한 거니까, 고쳐줬으면 좋겠어. 이렇게 하면 되잖아. ', type: [0, 1, 6, 7, 8, 9, 14, 15]}, //(사고형) T
    // q: '7. 연인이 오늘 머리를 바꾸고 옷도 새로 샀다',
    // a: [
    //   { answer: 'a. 눈치 못 채고 그냥 있는다', type: [1, 7, 10 ] },
    //   { answer: 'b. 눈치는 채나 말은 꺼내지 않는다', type: [2, 4, 9 ] },
      // { answer: 'c. "오 대박 오늘 머리도 바꾸고 옷도 새로 샀네?"라고 하며 단번에 눈치챈다', type: [0, 3, 6, 5, 10, 8 ] },
    ]
  },
  {
    q: '8. 오늘따라 축 처진 연인이 우울했을 때?',
    a: [
      { answer: 'a. 우울하다고? 뭐 때문에 우울한 거야?', type: [0, 1, 6, 7, 8, 9, 14, 15] },//(사고형) T
      { answer: 'b. 오늘 무슨 일 있었어? 많이 힘들었어?', type: [2, 3, 4, 5, 10, 11, 12, 13] },//(감정형) F
      // { answer: 'c. 집 앞까지 데려다준다.', type: [1, 7, 10 ] },
    ]
  },
  {
    q: '9. 힘들게 이벤트를 준비했다. 어떤 것이 더 기분 좋은가? ',
    a: [
      { answer: 'a. 사랑해! 네가 최고야. 나 완전 감동했어. ', type: [2, 3, 4, 5, 10, 11, 12, 13] }, //(감정형) F
      { answer: 'b. 고마워. 요즘 바쁠 텐데 언제 이런 걸 생각했어?', type: [0, 1, 6, 7, 8, 9, 14, 15] }, //(사고형) T
      // { answer: 'c. 연인에게 연락 올 때까지 무한 카톡, 무한 전화', type: [2, 10, 8, 4 ] },
    ]
  },
  {
    q: '10. 이번 주 주말 데이트 룩은? ',
    a: [
      { answer: 'a. 전 날부터 머리부터 발끝까지 풀 - 세팅! ', type: [1, 3, 5, 7, 9, 11, 13, 15] }, //(판단형) J
      { answer: 'b. 오늘 기분이 상쾌하니까.. 밝은 컬러 옷을 초이스~ ', type: [0, 2, 4, 6, 8, 10, 12, 14] }, //(인식형) P

    // q: '10. 연인이 연락도 없이 보고싶다고 우리집 앞에 와서 기다린다. ',
    // a: [
    //   { answer: 'a. 아니 갑자기 오면 어떡해.. 하 나 준비도 안 했는데 왜 와. 짜증나네', type: [4, 9, 10] },
    //   { answer: 'b. 아 그래?? 나 할 것들 좀만 마무리하고 나갈게', type: [0, 2, 6, 5 ] },
      // { answer: 'c. 헐 대박, 어디야?? 당장 나갈게!', type: [1, 7, 3, 10, 8 ] },
    ]
  },
  {
    q: '11. 아직 만난 지 얼마 안된 사이! 갑자기 상대방이 집에 온다고 한다면?',
    a: [
      { answer: 'a. 으아악! 일단 급한 곳부터! 보이는 곳 부터 치워둔다. ', type: [0, 2, 4, 6, 8, 10, 12, 14] }, //(인식형) P
      { answer: 'b. 평소에도 깔끔했지만, 쓰레기 버리기부터 화장실 청소까지 한다.', type: [1, 3, 5, 7, 9, 11, 13, 15] }, //(판단형) J

    // q: '11. 내가 추구하는 연애관은? ',
    // a: [
    //   { answer: 'a. 각자 할 것 하며, 평안하고 안정적인 연애가 좋다.', type: [1, 4, 9, 10 ] },
    //   { answer: 'b. 보고싶을 때 보고, 데이트도 많이 하고 꽁냥꽁냥하는 연애가 좋아.', type: [7, 0, 3, 6, 10] },
      // { answer: 'c. 연애는 마음가는대로! 불타오르는 연애가 최고지.', type: [2, 5, 8 ] },
    ]
  },
  {
    q: '12. 친구/커플끼리 해외여행 계획을 짜게 된 나는 ',
    a: [
      { answer: 'a. 할 거면 제대로! 일별로, 시간별로 세부 일정을 정리한다.  ', type: [1, 3, 5, 7, 9, 11, 13, 15] }, //(판단형) J
      { answer: 'b. 여행은 비행기 표가 시작이지! 가고 싶은 곳, 먹고 싶은 것만 찾아본다.', type: [0, 2, 4, 6, 8, 10, 12, 14] }, //(인식형) P

    // q: '12. 연인과 데이트 도중 화를 참을 수 없을만큼 심하게 싸웠다. 어떻게 할 것인가?',
    // a: [
    //   { answer: 'a. "아 화나네. 따라오지마 오늘 집 갈 거니까." 라고 말하며 집으로 간다.', type: [3, 6, 4, 9 ] },
    //   { answer: 'b. "야! 너 화내지마. 너 잘못이지. 내가 뭘 잘못했는데?" 소리지르며 끝까지 불같이 화낸다.', type: [0, 2, 5, 10, 8] },
      // { answer: 'c. "아니 그건 아니고, 하.." 조용히 운다.', type: [1, 7, 10] },
    ]
  }
]

const infoList = [
  {
    name: 'ESTP 활동가형',
    desc: '외로움 잘 탐. 손재주 좋음. 리더쉽 있음. 표현을 많이 함. 어른들이 좋아함. 밖에서 사람 만나는거 좋아하지만 게을러서 나가기까지가 싫음. 모임에서 어느새 내가 분위기 주도하고 있음. 근자감 쩔음.'
  },
  {
    name: 'ESTJ 사업가형',
    desc: '고집 셈, 현실적, 이성적, 직설적. 호불호 확실. 리더 맡는거 싫어하는데 막상 하면 잘함. 나가서 노는것보단 이것저것 배우는게 좋음. '
  },
  {
    name: 'ESFP 사교형',
    desc: '성격 매우 급함. 우주 최강 오지랖. 혼자 있으면 지루해서 뭔갈 계속 하고 있어햐 함. 모임장소에서 침묵 흐르는거 제일 싫어함. '
  },
  {
    name: 'ESFJ 친선도모형',
    desc: '생각보다 철저함. 혼자 계획 세우고 그 계획 틀어지는 거 싫어함. 술자리 좋아함. 책 읽고 영화보는거 좋아함. 상담, 고민 들어주는 거 잘함. 어디 나가면 어색한거 못참고 먼저 말 검. '
  },
  {
    name: 'ENFP 스파크형',
    desc: '정신산만함, 생각 많음, 일머리 있음. 흥미있고 관심있는건 열정적 그러나 관심 없는건 별로 알고 싶어하지도 않음. '
  },
  {
    name: 'ENFJ 언변능숙형',
    desc: '떠들썩함. 사람들을 이끄는 것에 타고난 기질이 있고 좋아하기도 함. 사람을 되게 좋아함. 사람들한테 잘 맞춰주는 성격. '
  },
  {
    name: 'ENTP 발명가형',
    desc: '혼자서 돌아다니는게 제일 편함. 독립심 강함. 탐욕적, 자존심, 냉철함. 겉으론 인싸 속모습은 아싸. 손재주 있음. '
  },
  {
    name: 'ENTJ 지도자형',
    desc: '팀플하면 결국 총대매고 내가 함. 누구한테 의존하거나 의지하는 스타일 아님. 오직 세상에 믿을 사람은 나 하나. 사람많을 땐 프로페셔널한 정상인, 혼자있을 땐 몽상가. '
  },
  {
    name: 'ISTP 백과사전형',
    desc: '만사가 귀찮음. 무미건조, 낯가리지만 근데 친해지면 말 많고 장난도 잘 침. MBTI, 사주, 타로 관심많음. '
  },
  {
    name: 'ISTJ 소금형',
    desc: '원리원칙적, 계획적. 여행가면 나서서 계획 세움. 그냥 나혼자 하는게 젤 편하고 젤 빠름. 시작했으면 목표한거 끝내야함. '
  },
  {
    name: 'ISFP 성인군자형',
    desc: '귀찮음, 감정기복 심하고 공감능력 좋음. 인간관계에 신경 많이 쓰는 편. 자존감 낮음. 주변 의견, 분위기 따라감. 불평불만이 쌓여도 표출은 못함. '
  },
  {
    name: 'ISFJ 권력형',
    desc: '원칙주의자. 남들 챙기는 거 좋아함. 외로움 많이 타는데 많은 사람이랑 있는건 싫음. 아싸무리에서 인싸, 인싸무리에서 아싸. '
  },
  {
    name: 'INFP 잔다르크형',
    desc: '성격이론에 관심 많고, 커뮤니티 많이 함. 이상주의적. 남한테 폐끼치는 거 제일 싫어함. '
  },
  {
    name: 'INFJ 예언자형',
    desc: '생각이 너무 많음. 새로운 일 시작하는거, 새로운 사람 만나는거 싫어함. 낯가림 심함, 눈치 빠름. 내가 하고싶은건 열심히 함. 특히 예술쪽으로 감수성 풍부. '
  },
  {
    name: 'INTP 아이디어형',
    desc: '자발적 아웃사이더. 혼자 있는게 제일 편하고 행복. 공상 자주함. 분석, 추리 좋아함, 자기주관 뚜렷, 호불호 확실 감수성 풍부. '
  },
  {
    name: 'INTJ 과학자형',
    desc: '혼자있는거 좋아함, 사회활동 싫어함. 하루하루 세세하게 계획짜놓고 지내는 것 좋아함. 돈관리도 잘 하는 편, 사실과 원리원칙 중요. '
  }
]