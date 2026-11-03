/* ===== 2026 한국시리즈 KT vs 삼성 시뮬레이션 엔진 ===== */
const LG = { k: .195, bb: .095, s: .158, d: .046, t: .005, hr: .027 };

function B(name, pos, hand, k, bb, s, d, t, hr, spd, note) {
  return { name, pos, hand, k, bb, s, d, t, hr, spd, note };
}
function P(name, hand, opt) {
  return Object.assign({ name, hand, sub: false, k: 1, bb: 1, h: 1, hr: 1, lim: 30 }, opt);
}

const TEAMS = {
  kt: {
    name: 'KT 위즈', short: 'KT',
    lineup: [
      B('최원준', 'RF', 'L', .10, .075, .235, .045, .010, .016, 1.3, '시즌 204안타+ 단일시즌 최다안타 경쟁'),
      B('김현수', 'LF', 'L', .12, .11, .185, .050, .002, .025, .7, '큰 경기 경험 풍부한 베테랑'),
      B('안현민', 'DH', 'R', .18, .13, .160, .045, .003, .052, 1.0, '출루+장타 겸비 중심타자'),
      B('힐리어드', '1B', 'L', .23, .09, .140, .050, .004, .050, 1.0, '간판 거포'),
      B('허경민', '3B', 'R', .10, .08, .190, .040, .003, .015, .9, '컨택형, 삼진 적음'),
      B('장성우', 'C', 'R', .18, .10, .140, .040, .001, .033, .6, '안방마님·한방'),
      B('김상수', '2B', 'R', .14, .09, .170, .035, .004, .012, 1.0, '작전 수행·수비'),
      B('배정대', 'CF', 'R', .19, .09, .150, .040, .007, .020, 1.1, '중견 수비'),
      B('권동진', 'SS', 'L', .20, .08, .145, .030, .006, .010, 1.1, '유격수')
    ],
    pitchers: {
      '대니엘': P('대니엘', 'R', { k: 1.12, bb: .75, h: .86, hr: .82, lim: 95, sp: true, note: '정규 5승2패 ERA 2.13, 제구형' }),
      '고영표': P('고영표', 'R', { sub: true, changeup: true, k: .95, bb: .68, h: .94, hr: .88, lim: 98, sp: true, note: '15승 공동 다승왕, 사이드암' }),
      '로건': P('로건', 'L', { k: 1.12, bb: .92, h: .95, hr: .95, lim: 92, sp: true, note: '좌완, 후반기 1선발' }),
      '소형준': P('소형준', 'R', { k: .96, bb: .85, h: .93, hr: .88, lim: 92, sp: true, note: '승률왕' }),
      '박영현': P('박영현', 'R', { k: 1.38, bb: .85, h: .80, hr: .88, lim: 35, note: '마무리' }),
      '스기모토': P('스기모토', 'R', { k: 1.25, bb: 1.0, h: .86, hr: .90, lim: 28, note: '25홀드 홀드왕' }),
      '손동현': P('손동현', 'R', { k: 1.05, bb: .95, h: .95, hr: .95, lim: 30, note: '필승조' }),
      '우규민': P('우규민', 'R', { sub: true, k: .80, bb: .60, h: 1.0, hr: .95, lim: 25, note: '베테랑 사이드암' }),
      '주권': P('주권', 'R', { k: .90, bb: .90, h: 1.0, hr: 1.0, lim: 25, note: '체인지업 불펜' }),
      '김정운': P('김정운', 'R', { sub: true, k: 1.0, bb: 1.15, h: .95, hr: .95, lim: 25, note: '언더핸드' }),
      '전용주': P('전용주', 'L', { k: 1.15, bb: 1.3, h: .92, hr: .95, lim: 20, note: '좌완 원포인트' }),
      '오원석': P('오원석', 'L', { k: 1.0, bb: 1.05, h: 1.0, hr: 1.0, lim: 45, note: '좌완 롱릴리프(깜짝 카드 후보)' }),
      '배제성': P('배제성', 'R', { k: 1.0, bb: 1.1, h: 1.0, hr: 1.0, lim: 50, note: '롱릴리프' })
    },
    roles: {
      closer: '박영현', setup: ['스기모토', '손동현'], lefty: ['오원석', '전용주'],
      middle: ['우규민', '주권', '김정운'], long: ['배제성', '오원석', '김정운'],
      rotation: ['대니엘', '고영표', '로건', '소형준']
    }
  },
  ss: {
    name: '삼성 라이온즈', short: '삼성',
    lineup: [
      B('김지찬', 'CF', 'L', .11, .10, .205, .035, .012, .008, 1.4, '리드오프, 도루'),
      B('박승규', 'RF', 'R', .17, .08, .175, .045, .006, .018, 1.1, 'PO 결승타'),
      B('구자욱', 'LF', 'L', .14, .10, .205, .062, .006, .035, 1.0, '타율 1위권(.36), 햄스트링 회복'),
      B('디아즈', '1B', 'L', .18, .085, .145, .045, .002, .058, .8, '전년 홈런왕, PO 홈런'),
      B('최형우', 'DH', 'L', .16, .12, .160, .050, .002, .038, .7, 'PS 최고령 홈런'),
      B('김영웅', '3B', 'L', .25, .085, .130, .045, .006, .048, 1.0, '장타력, 수비 실책 주의'),
      B('강민호', 'C', 'R', .16, .08, .150, .040, .001, .030, .6, '베테랑 포수'),
      B('류지혁', '2B', 'L', .15, .09, .170, .040, .006, .014, 1.0, 'PO 홈런'),
      B('이재현', 'SS', 'R', .20, .10, .135, .045, .004, .030, 1.0, '유격수')
    ],
    pitchers: {
      '최원태': P('최원태', 'R', { k: 1.0, bb: 1.05, h: 1.06, hr: 1.08, lim: 85, sp: true, vsKT: 1.06, note: 'KT전 2경기 1패 ERA 6.94' }),
      '페덱': P('페덱', 'R', { k: 1.22, bb: .88, h: .90, hr: .88, lim: 92, sp: true, note: 'PO4 5⅓이닝 1실점, 구위형' }),
      '후라도': P('후라도', 'R', { k: .95, bb: .72, h: .90, hr: .85, lim: 100, sp: true, note: 'PO MVP, PO5 7이닝 1실점' }),
      '원태인': P('원태인', 'R', { k: 1.02, bb: .78, h: .88, hr: .92, lim: 35, note: '토종 에이스 → PS 불펜(마무리) 전환' }),
      '이승민': P('이승민', 'L', { k: 1.05, bb: 1.0, h: .92, hr: .90, lim: 25, note: '좌완 필승조(22홀드+)' }),
      '배찬승': P('배찬승', 'L', { k: 1.28, bb: 1.25, h: .88, hr: .95, lim: 25, note: '강속구 좌완' }),
      '김태훈': P('김태훈', 'R', { k: .95, bb: .95, h: .98, hr: 1.0, lim: 25, note: '베테랑 셋업' }),
      '이승현': P('이승현', 'R', { k: 1.0, bb: 1.05, h: 1.08, hr: 1.1, lim: 25, note: '우완 불펜' }),
      '이재희': P('이재희', 'R', { k: 1.0, bb: 1.1, h: 1.0, hr: 1.0, lim: 30, note: '우완 불펜' }),
      '임기영': P('임기영', 'R', { sub: true, k: .85, bb: .90, h: 1.02, hr: 1.0, lim: 35, note: '언더핸드' }),
      '양창섭': P('양창섭', 'R', { k: .90, bb: .95, h: 1.02, hr: 1.05, lim: 50, note: '롱릴리프' }),
      '장찬희': P('장찬희', 'R', { k: .95, bb: 1.1, h: 1.02, hr: 1.0, lim: 35, note: '우완' }),
      '사토시': P('사토시', 'R', { k: 1.0, bb: 1.0, h: 1.0, hr: 1.0, lim: 35, note: '우완' })
    },
    roles: {
      closer: '원태인', setup: ['이승민', '김태훈', '배찬승'], lefty: ['배찬승', '이승민'],
      middle: ['이승현', '이재희', '임기영'], long: ['양창섭', '장찬희', '사토시'],
      rotation: ['최원태', '페덱', '후라도']
    }
  }
};

const GAMES = [
  { n: 1, date: '2026-11-03', home: 'kt', park: '수원 KT위즈파크' },
  { n: 2, date: '2026-11-04', home: 'kt', park: '수원 KT위즈파크' },
  { n: 3, date: '2026-11-06', home: 'ss', park: '대구 삼성라이온즈파크' },
  { n: 4, date: '2026-11-07', home: 'ss', park: '대구 삼성라이온즈파크' },
  { n: 5, date: '2026-11-08', home: 'ss', park: '대구 삼성라이온즈파크' },
  { n: 6, date: '2026-11-10', home: 'kt', park: '수원 KT위즈파크' },
  { n: 7, date: '2026-11-11', home: 'kt', park: '수원 KT위즈파크' }
];
const PARK = { '수원 KT위즈파크': { hr: 1.03, h: 1.0 }, '대구 삼성라이온즈파크': { hr: 1.15, h: 1.02 } };

// 포스트시즌 직전 마지막 등판일
const LAST_PITCHED = {
  ss: { '최원태': '2026-10-29', '페덱': '2026-10-30', '후라도': '2026-11-01', '원태인': '2026-10-29' },
  kt: {}
};
const DEFAULT_ROT = {
  ss: ['최원태', '페덱', '후라도', '최원태', '페덱', '후라도', '최원태'],
  kt: ['대니엘', '고영표', '로건', '소형준', '대니엘', '고영표', '로건']
};

/* ---------- utils ---------- */
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
const dayNum = d => Math.round(new Date(d + 'T00:00:00Z').getTime() / 86400000);
const other = t => t === 'kt' ? 'ss' : 'kt';
const pick = (rng, arr) => arr[Math.floor(rng() * arr.length)];

/* ---------- 투수 등판 가능 여부 ---------- */
// usage: {kt:{name:[{day,pitches,start}]}, ss:{...}}
function restDays(usage, team, name, day) {
  const u = (usage[team][name] || []).filter(x => x.day < day);
  let last = u.length ? Math.max(...u.map(x => x.day)) : null;
  if (LAST_PITCHED[team][name]) {
    const lp = dayNum(LAST_PITCHED[team][name]);
    last = last === null ? lp : Math.max(last, lp);
  }
  if (last === null) return 9;
  return day - last - 1;
}
function relieverAvailable(usage, team, name, day) {
  const u = usage[team][name] || [];
  const d1 = u.filter(x => x.day === day - 1).reduce((a, x) => a + x.pitches, 0);
  const d2 = u.filter(x => x.day === day - 2).reduce((a, x) => a + x.pitches, 0);
  const startedRecently = u.some(x => x.start && day - x.day <= 3);
  if (startedRecently) return false;
  if (d1 >= 30) return false;
  if (d1 > 0 && d2 > 0) return false;
  if (d2 >= 45) return false;
  return true;
}

/* ---------- 타석 확률 ---------- */
function paProbs(b, batTeam, p, app, ctx, inning) {
  let k = b.k * p.k, bb = b.bb * p.bb, s = b.s * p.h, d = b.d * p.h, t = b.t * p.h, hr = b.hr * p.hr;
  let hm = 1, km = 1, hrm = 1;
  // 플래툰
  if (p.sub) {
    if (b.hand === 'R') { km *= 1.10; hm *= .90; hrm *= .85; }
    else { km *= .96; hm *= p.changeup ? 1.0 : 1.06; hrm *= p.changeup ? 1.0 : 1.04; }
  } else if (b.hand === p.hand) {
    if (b.hand === 'L') { km *= 1.18; hm *= .88; hrm *= .80; }
    else { km *= 1.04; hm *= .97; hrm *= .96; }
  } else {
    if (b.hand === 'L') { km *= .96; hm *= 1.04; hrm *= 1.06; }
    else { km *= .95; hm *= 1.05; hrm *= 1.05; }
  }
  // 구장
  hm *= ctx.park.h; hrm *= ctx.park.hr;
  // 투수 컨디션
  hm *= app.fat; km /= app.fat; hrm *= app.fat;
  if (app.start && app.bf >= 18) { hm *= 1.05; hrm *= 1.08; }
  if (app.pitches > app.lim) { const x = 1 + (app.pitches - app.lim) / 90; hm *= x; hrm *= x; bb *= x; km /= x; }
  if (p.vsKT && batTeam === 'kt') { hm *= p.vsKT; hrm *= p.vsKT; }
  // KT 실전 공백(1차전 초반)
  if (ctx.ktRust && batTeam === 'kt' && inning <= 3) { hm *= .92; hrm *= .90; km *= 1.06; }
  // 삼성 PO 5경기 후 불펜 피로(1~2차전)
  if (ctx.ssPenFatigue && batTeam === 'kt' && !app.start) { hm *= 1.03; }
  k *= km; s *= hm; d *= hm; t *= hm; hr *= hrm;
  const sum = k + bb + s + d + t + hr;
  return { k, bb, s, d, t, hr, out: Math.max(.25, 1 - sum) };
}

const DIR1 = ['좌전 안타', '중전 안타', '우전 안타', '좌전 안타', '우전 안타', '내야 안타', '유격수 옆 빠지는 안타', '1·2루간 빠지는 안타'];
const DIR2 = ['좌중간 2루타', '우중간 2루타', '좌익선상 2루타', '우익선상 2루타', '좌익수 키 넘기는 2루타'];
const DIR3 = ['우중간 3루타', '좌중간 3루타', '우익선상 3루타'];
const HRDIR = ['좌월', '중월', '우월', '좌중간 담장 넘기는', '우중간 담장 넘기는'];
const GO = ['투수 앞 땅볼', '1루수 땅볼', '2루수 땅볼', '유격수 땅볼', '3루수 땅볼', '2루수 땅볼', '유격수 땅볼'];
const FO = ['좌익수 뜬공', '중견수 뜬공', '우익수 뜬공', '좌익수 뜬공', '우익수 뜬공', '포수 파울플라이', '1루수 파울플라이'];
const LO = ['유격수 직선타', '2루수 직선타', '3루수 직선타', '중견수 직선타'];
const HRNAME = ['솔로', '투런', '스리런', '만루'];

/* ---------- 한 경기 시뮬레이션 ---------- */
function simulateGame(cfg, rng, wantLog) {
  const home = cfg.home, away = other(home);
  const score = { kt: 0, ss: 0 };
  const line = { kt: [], ss: [] };
  const hits = { kt: 0, ss: 0 }, errs = { kt: 0, ss: 0 };
  const lineIdx = { kt: 0, ss: 0 };
  const bat = { kt: {}, ss: {} };
  TEAMS.kt.lineup.forEach(b => bat.kt[b.name] = { pa: 0, ab: 0, h: 0, d: 0, t: 0, hr: 0, rbi: 0, r: 0, bb: 0, k: 0, sb: 0 });
  TEAMS.ss.lineup.forEach(b => bat.ss[b.name] = { pa: 0, ab: 0, h: 0, d: 0, t: 0, hr: 0, rbi: 0, r: 0, bb: 0, k: 0, sb: 0 });
  const apps = { kt: [], ss: [] };
  const log = [];
  const usedNames = { kt: new Set(), ss: new Set() };
  let leadTaken = { kt: null, ss: null };
  const day = dayNum(cfg.date);

  function mkApp(team, name, isStart, role, inning, diffAtEntry, planOuts) {
    const p = TEAMS[team].pitchers[name];
    let lim = p.lim, fat = 1;
    if (isStart) {
      const rd = restDays(cfg.usage, team, name, day);
      if (rd === 3) { lim -= 10; fat = 1.03; }
      else if (rd === 2) { lim -= 25; fat = 1.07; }
      else if (rd <= 1) { lim -= 45; fat = 1.12; }
      if (!p.sp) lim = Math.min(lim, 55); // 불펜 투수 선발(오프너)
      if (cfg.totalWar) lim -= 5;
    } else if (p.sp) {
      lim = 30; // 선발의 불펜 등판
    }
    const a = { team, name, p, start: isStart, role: role || (isStart ? '선발' : ''), outs: 0, h: 0, r: 0, bb: 0, k: 0, hr: 0, pitches: 0, bf: 0, lim, fat, inning, diffAtEntry, planOuts: planOuts || 99, runsInning: 0 };
    apps[team].push(a);
    usedNames[team].add(name);
    return a;
  }

  const cur = {
    kt: mkApp('kt', cfg.starters.kt, true, '선발', 1, 0),
    ss: mkApp('ss', cfg.starters.ss, true, '선발', 1, 0)
  };

  function upcomingLefties(batTeam, n) {
    let c = 0; for (let i = 0; i < n; i++) { if (TEAMS[batTeam].lineup[(lineIdx[batTeam] + i) % 9].hand === 'L') c++; } return c;
  }

  function available(team, name) {
    if (usedNames[team].has(name)) return false;
    const p = TEAMS[team].pitchers[name];
    if (name === cfg.starters.kt || name === cfg.starters.ss) return false;
    if (p.sp) {
      // 선발 자원의 불펜 투입: 총력전 & 휴식 2일 이상
      if (!cfg.totalWar) return false;
      return restDays(cfg.usage, team, name, day) >= 2 && !(cfg.nextStart && cfg.nextStart[team] === name && cfg.n < 7);
    }
    return relieverAvailable(cfg.usage, team, name, day);
  }

  function chooseReliever(team, inning, half) {
    const R = TEAMS[team].roles;
    const diff = score[team] - score[other(team)];
    const batTeam = other(team);
    const lefties = upcomingLefties(batTeam, 3);
    const high = diff >= -2 && diff <= 3;
    const tw = cfg.totalWar;
    const spRelief = tw ? R.rotation.filter(n => n !== cfg.starters[team]) : [];
    let order = [], role = '', plan = 3;
    const isHome = team === home;
    if (inning >= 9) {
      if (diff >= 1 && diff <= 3) { order = [R.closer, ...R.setup]; role = '마무리'; }
      else if (diff === 0) { order = isHome || inning >= 10 ? [R.closer, ...R.setup, ...spRelief, ...R.middle] : [...R.setup, R.closer, ...R.middle]; role = diff === 0 && order[0] === R.closer ? '마무리(동점)' : '필승조'; }
      else if (diff >= -2 && diff < 0) { order = [...R.setup.slice(1), ...R.middle, ...R.setup]; role = '추격조'; }
      else { order = [...R.long, ...R.middle]; role = '패전/점수차 관리'; plan = 6; }
    } else if (inning === 8) {
      if (diff >= 0 && diff <= 3) {
        if (team === 'ss' && tw && diff >= 1 && diff <= 2) { order = [R.closer, ...R.setup]; role = '마무리(멀티이닝)'; plan = 6; }
        else { order = lefties >= 2 ? [...R.lefty, ...R.setup] : [...R.setup]; role = '필승조'; }
      } else if (high) { order = [...R.setup.slice(1), ...R.middle]; role = '추격조'; }
      else { order = [...R.long, ...R.middle]; role = '점수차 관리'; plan = 6; }
    } else if (inning === 7) {
      if (high) { order = lefties >= 2 ? [...R.lefty, ...spRelief, ...R.setup] : [...spRelief, ...R.setup.slice(1), R.setup[0], ...R.middle]; role = lefties >= 2 ? '좌타 상대 스페셜' : '필승조'; }
      else { order = [...R.long, ...R.middle]; role = '점수차 관리'; plan = 6; }
    } else {
      if (high) { order = [...spRelief, ...(lefties >= 2 ? R.lefty : []), ...R.middle, ...R.long]; role = lefties >= 2 ? '좌타 상대' : '중간계투'; plan = inning <= 4 ? 6 : 3; }
      else { order = [...R.long, ...R.middle]; role = '롱릴리프'; plan = 9; }
    }
    let name = order.find(n => n && available(team, n));
    if (!name) {
      const all = Object.keys(TEAMS[team].pitchers).filter(n => available(team, n));
      name = all[0];
    }
    if (!name) return null;
    const p = TEAMS[team].pitchers[name];
    if (inning >= 9 && diff === 0) role = name === R.closer ? '마무리(동점)' : '필승조(동점)';
    if (p.sp) { role = '선발 불펜 투입'; plan = 6; }
    if (R.long.includes(name) && plan < 6) plan = 6;
    return { name, role, plan };
  }

  function changePitcher(team, inning, half, reason) {
    const c = chooseReliever(team, inning, half);
    if (!c) return false;
    const old = cur[team];
    const diff = score[team] - score[other(team)];
    cur[team] = mkApp(team, c.name, false, c.role, inning, diff, c.plan);
    if (wantLog) log.push({ type: 'chg', inn: inning, half, team, text: `${TEAMS[team].short} 투수 교체: ${old.name}(${old.pitches}구) → ${c.name} [${c.role}] · ${reason}` });
    return true;
  }

  function closeGame(team) { const d = score[team] - score[other(team)]; return d >= -3 && d <= 4; }

  function checkStart(team, inning, half) {
    const a = cur[team];
    if (inning === 1) return;
    if (a.start) {
      let r = null;
      if (a.pitches >= a.lim - 6) r = `투구수 ${a.pitches}개`;
      else if (inning >= 5 && a.r >= 5) r = `${a.r}실점`;
      else if (inning >= 6 && a.bf >= 26 && closeGame(team)) r = '타순 세 바퀴, 접전';
      else if (cfg.totalWar && inning >= 5 && a.r >= 3 && closeGame(team)) r = '총력전 조기 교체';
      else if (a.name === '최원태' && inning >= 5 && a.r >= 3 && closeGame(team)) r = 'KT전 약세, 빠른 교체';
      else if (inning >= 8 && !(a.r <= 1 && a.pitches < a.lim - 15)) r = '필승조 가동';
      if (r) changePitcher(team, inning, half, r);
    } else {
      let r = null;
      const diff = score[team] - score[other(team)];
      if (a.outs >= a.planOuts) r = '예정 이닝 소화';
      else if (a.pitches >= a.lim * 0.75) r = `투구수 ${a.pitches}개`;
      // 9회 세이브 상황인데 마무리가 아니면 교체
      else if (inning >= 9 && diff >= 1 && diff <= 3 && a.name !== TEAMS[team].roles.closer && available(team, TEAMS[team].roles.closer)) r = '세이브 상황';
      if (r) changePitcher(team, inning, half, r);
    }
  }
  function checkMid(team, inning, half, onBase) {
    const a = cur[team];
    if (a.start) {
      if (a.pitches >= a.lim + 10) return changePitcher(team, inning, half, `투구수 ${a.pitches}개`);
      if (a.runsInning >= 3 && onBase > 0 && inning >= 3) return changePitcher(team, inning, half, `이닝 ${a.runsInning}실점, 흐름 차단`);
      if (a.r >= 6) return changePitcher(team, inning, half, `${a.r}실점 강판`);
      if (cfg.totalWar && a.runsInning >= 2 && onBase >= 2 && inning >= 4 && closeGame(team)) return changePitcher(team, inning, half, '총력전, 위기 차단');
    } else {
      if (a.pitches >= a.lim + 6) return changePitcher(team, inning, half, `투구수 ${a.pitches}개`);
      if (a.runsInning >= 3 && onBase > 0) return changePitcher(team, inning, half, '난조');
    }
    return false;
  }

  function noteLead(prevDiffBat, batTeam) {
    const nd = score[batTeam] - score[other(batTeam)];
    if (prevDiffBat <= 0 && nd > 0) {
      leadTaken[batTeam] = { own: apps[batTeam].indexOf(cur[batTeam]), opp: apps[other(batTeam)].indexOf(cur[other(batTeam)]) };
    }
  }

  let inning = 1, ended = false, tie = false;
  const maxInn = 30; // 7차전 안에 시리즈가 끝나도록 무승부 없이 승부가 날 때까지 연장
  for (; inning <= maxInn && !ended; inning++) {
    for (const half of ['top', 'bot']) {
      const batTeam = half === 'top' ? away : home;
      const fld = other(batTeam);
      if (half === 'bot' && inning >= 9 && score[home] > score[away]) { line[home].push('X'); break; }
      let hdr = null;
      if (wantLog) { hdr = { type: 'half', inn: inning, half, batTeam, pitcher: cur[fld].name }; log.push(hdr); }
      checkStart(fld, inning, half);
      if (hdr) hdr.pitcher = cur[fld].name;
      cur[fld].runsInning = 0;
      let outs = 0, bases = [null, null, null], runsInn = 0;
      const lu = TEAMS[batTeam].lineup;
      while (outs < 3) {
        const onBase = bases.filter(Boolean).length;
        checkMid(fld, inning, half, onBase);
        const a = cur[fld];
        const o0 = outs;
        const b = lu[lineIdx[batTeam] % 9];
        const bs = bat[batTeam][b.name];
        // 도루
        if (bases[0] && !bases[1] && outs < 2) {
          const rn = lu.find(x => x.name === bases[0]);
          if (rn && rn.spd >= 1.25 && rng() < .08) {
            if (rng() < .76) { bases[1] = bases[0]; bases[0] = null; bat[batTeam][rn.name].sb++; if (wantLog) log.push({ type: 'ev', text: `${rn.name} 2루 도루 성공` }); }
            else { bases[0] = null; outs++; if (wantLog) log.push({ type: 'ev', text: `${rn.name} 2루 도루 실패 (아웃)` }); if (outs >= 3) { a.outs += outs - o0; break; } }
          }
        }
        const pr = paProbs(b, batTeam, a.p, a, cfg.ctx, inning);
        const prevDiff = score[batTeam] - score[fld];
        let x = rng(), ev;
        if ((x -= pr.k) < 0) ev = 'K';
        else if ((x -= pr.bb) < 0) ev = 'BB';
        else if ((x -= pr.s) < 0) ev = '1B';
        else if ((x -= pr.d) < 0) ev = '2B';
        else if ((x -= pr.t) < 0) ev = '3B';
        else if ((x -= pr.hr) < 0) ev = 'HR';
        else ev = 'OUT';
        let pc;
        if (ev === 'K') pc = 4 + Math.floor(rng() * 3);
        else if (ev === 'BB') pc = 5 + Math.floor(rng() * 2);
        else pc = 1 + Math.floor(rng() * 6);
        a.pitches += pc; a.bf++; bs.pa++;
        let runs = 0, text = '', rbi = 0; const scorers = [];
        const scoreRunner = (rn, earnRbi) => { if (rn) { runs++; bat[batTeam][rn].r++; scorers.push(rn); if (earnRbi) rbi++; } };
        if (ev === 'K') { outs++; a.k++; bs.k++; bs.ab++; text = rng() < .72 ? '헛스윙 삼진' : '루킹 삼진'; }
        else if (ev === 'BB') {
          bs.bb++; a.bb++;
          text = rng() < .1 ? '몸에 맞는 공' : '볼넷';
          if (bases[0]) { if (bases[1]) { if (bases[2]) scoreRunner(bases[2], true); bases[2] = bases[1]; } bases[1] = bases[0]; }
          bases[0] = b.name;
        } else if (ev === '1B') {
          bs.h++; bs.ab++; a.h++; hits[batTeam]++;
          text = pick(rng, DIR1);
          scoreRunner(bases[2], true); bases[2] = null;
          if (bases[1]) { if (rng() < .62) scoreRunner(bases[1], true); else bases[2] = bases[1]; bases[1] = null; }
          if (bases[0]) { if (!bases[2] && rng() < .3) bases[2] = bases[0]; else bases[1] = bases[0]; }
          bases[0] = b.name;
        } else if (ev === '2B') {
          bs.h++; bs.d++; bs.ab++; a.h++; hits[batTeam]++;
          text = pick(rng, DIR2);
          scoreRunner(bases[2], true); scoreRunner(bases[1], true); bases[2] = null; bases[1] = null;
          if (bases[0]) { if (rng() < .45) scoreRunner(bases[0], true); else bases[2] = bases[0]; bases[0] = null; }
          bases[1] = b.name;
        } else if (ev === '3B') {
          bs.h++; bs.t++; bs.ab++; a.h++; hits[batTeam]++;
          text = pick(rng, DIR3);
          bases.forEach(r => scoreRunner(r, true)); bases = [null, null, b.name];
        } else if (ev === 'HR') {
          bs.h++; bs.hr++; bs.ab++; a.h++; a.hr++; hits[batTeam]++;
          const on = bases.filter(Boolean).length;
          text = `${pick(rng, HRDIR)} ${HRNAME[on]} 홈런`;
          bases.forEach(r => scoreRunner(r, true)); bases = [null, null, null];
          scoreRunner(b.name, true);
        } else {
          bs.ab++;
          const y = rng();
          if (rng() < .015) { // 실책
            errs[fld]++; text = pick(rng, ['유격수 실책으로 출루', '3루수 포구 실책으로 출루', '2루수 송구 실책으로 출루', '1루수 포구 실책으로 출루']);
            scoreRunner(bases[2], false); bases[2] = bases[1]; bases[1] = bases[0]; bases[0] = b.name;
          } else if (y < .45) { // 땅볼
            text = pick(rng, GO);
            if (bases[0] && outs < 2 && rng() < .42) {
              outs += 2; text = text.replace('땅볼', '병살타');
              if (outs < 3) { if (bases[2]) scoreRunner(bases[2], false); bases[2] = bases[1]; }
              bases[1] = null; bases[0] = null;
              if (outs >= 3) { bases = [null, null, null]; }
            } else {
              outs++;
              if (outs < 3) {
                if (bases[2] && rng() < .45) { scoreRunner(bases[2], true); bases[2] = null; }
                if (bases[1] && !bases[2] && rng() < .55) { bases[2] = bases[1]; bases[1] = null; }
                if (bases[0]) { if (!bases[1]) { bases[1] = bases[0]; bases[0] = null; } }
              }
            }
          } else if (y < .9) { // 뜬공
            text = pick(rng, FO);
            outs++;
            if (outs < 3 && !text.includes('파울') && !text.includes('포수')) {
              if (bases[2] && rng() < .68) { scoreRunner(bases[2], true); bases[2] = null; text += ' (희생플라이)'; }
              if (bases[1] && !bases[2] && rng() < .3) { bases[2] = bases[1]; bases[1] = null; }
            }
          } else { text = pick(rng, LO); outs++; }
        }
        a.outs += Math.min(outs, 3) - o0;
        bs.rbi += rbi;
        score[batTeam] += runs; runsInn += runs; a.r += runs; a.runsInning += runs;
        if (runs) noteLead(prevDiff, batTeam);
        if (wantLog) {
          log.push({ type: 'pa', batter: b.name, pitcher: a.name, text, runs, outs: Math.min(outs, 3), bases: bases.map(x => x ? 1 : 0).join(''), score: { kt: score.kt, ss: score.ss }, ev });
        }
        lineIdx[batTeam]++;
        // 끝내기
        if (half === 'bot' && inning >= 9 && score[home] > score[away]) { ended = true; break; }
      }
      // 아웃카운트 집계: 이닝 아웃은 현재 투수 기록에 누적(간이: 교체 시점별 반영)
      line[batTeam].push(runsInn);
      if (ended) break;
    }
    if (!ended && inning >= 9) {
      if (score.kt !== score.ss) { ended = true; }
      else if (inning === maxInn) { tie = true; ended = true; }
    }
  }
  return finalize();

  function finalize() {
    const winner = tie ? 'tie' : (score.kt > score.ss ? 'kt' : 'ss');
    let W = null, L = null, S = null;
    if (winner !== 'tie') {
      const lt = leadTaken[winner];
      if (lt) {
        let wi = lt.own;
        const wa = apps[winner];
        if (wa[wi] && wa[wi].start && wa[wi].outs < 15 && wa.length > 1) wi = Math.min(wi + 1, wa.length - 1);
        W = wa[wi] ? wa[wi].name : wa[0].name;
        L = apps[other(winner)][lt.opp] ? apps[other(winner)][lt.opp].name : null;
        const last = wa[wa.length - 1];
        if (last.name !== W && !last.start && last.diffAtEntry >= 1 && last.diffAtEntry <= 3) S = last.name;
      }
    }
    return { score: { ...score }, line, hits, errs, bat, apps, log, winner, W, L, S, innings: inning - 1 };
  }
}


/* ---------- 다회 시뮬레이션 ---------- */
function runMany(cfg, N, seed) {
  const res = { kt: 0, ss: 0, tie: 0, scores: {}, runs: { kt: 0, ss: 0 }, bat: { kt: {}, ss: {} }, pit: { kt: {}, ss: {} }, N };
  const seeds = [];
  for (let i = 0; i < N; i++) {
    const s = seed * 7919 + i * 104729;
    const g = simulateGame(cfg, mulberry32(s), false);
    seeds.push({ s, w: g.winner, sc: g.score, inn: g.innings });
    res[g.winner]++;
    const key = g.score.kt + '-' + g.score.ss;
    res.scores[key] = (res.scores[key] || 0) + 1;
    res.runs.kt += g.score.kt; res.runs.ss += g.score.ss;
    for (const t of ['kt', 'ss']) {
      for (const [n, st] of Object.entries(g.bat[t])) {
        const o = res.bat[t][n] || (res.bat[t][n] = { h: 0, hr: 0, rbi: 0, multi: 0, hrG: 0, bb: 0, k: 0, r: 0 });
        o.h += st.h; o.hr += st.hr; o.rbi += st.rbi; o.bb += st.bb; o.k += st.k; o.r += st.r;
        if (st.h >= 2) o.multi++; if (st.hr >= 1) o.hrG++;
      }
      g.apps[t].forEach((a, idx) => {
        const o = res.pit[t][a.name] || (res.pit[t][a.name] = { app: 0, outs: 0, r: 0, k: 0, inn: {}, start: a.start, roles: {}, W: 0, L: 0, S: 0 });
        o.app++; o.outs += a.outs; o.r += a.r; o.k += a.k;
        o.inn[a.inning] = (o.inn[a.inning] || 0) + 1;
        if (a.role) o.roles[a.role] = (o.roles[a.role] || 0) + 1;
      });
      if (g.W) { const ww = res.pit[g.winner] && res.pit[g.winner][g.W]; if (ww) ww.W++; }
      if (g.S) { const ss = res.pit[g.winner] && res.pit[g.winner][g.S]; if (ss) ss.S++; }
    }
  }
  // 대표 경기 선정: 예상 승자 + 최빈 스코어
  const fav = res.kt >= res.ss ? 'kt' : 'ss';
  const favScores = {};
  seeds.filter(x => x.w === fav).forEach(x => { const k = x.sc.kt + '-' + x.sc.ss; favScores[k] = (favScores[k] || 0) + 1; });
  const mode = Object.entries(favScores).sort((a, b) => b[1] - a[1])[0][0];
  res.fav = fav; res.mode = mode;
  const cands = seeds.filter(x => x.sc.kt + '-' + x.sc.ss === mode);
  res.repSeed = (cands.find(x => x.inn <= 9) || cands[0]).s;
  res.allSeeds = seeds;
  return res;
}

/* ---------- 시리즈 경로 구성 ---------- */
function buildPath(opts) {
  opts = opts || {};
  const overrides = opts.overrides || {};
  const reroll = opts.reroll || {};
  const N = opts.N || 800;
  const usage = { kt: {}, ss: {} };
  const wins = { kt: 0, ss: 0, tie: 0 };
  const games = [];
  for (const G of GAMES) {
    const starters = {
      kt: (overrides[G.n] && overrides[G.n].kt) || DEFAULT_ROT.kt[G.n - 1],
      ss: (overrides[G.n] && overrides[G.n].ss) || DEFAULT_ROT.ss[G.n - 1]
    };
    const elim = wins.kt === 3 || wins.ss === 3;
    const totalWar = G.n >= 6 || elim;
    const nextStart = { kt: DEFAULT_ROT.kt[G.n] || null, ss: DEFAULT_ROT.ss[G.n] || null };
    const cfg = {
      n: G.n, date: G.date, home: G.home, starters, usage, totalWar, nextStart,
      ctx: { park: PARK[G.park], ktRust: G.n === 1, ssPenFatigue: G.n <= 2 }
    };
    const usageSnap = JSON.parse(JSON.stringify(usage));
    const seedBase = 2026 * 100 + G.n + (reroll[G.n] || 0) * 1000;
    const many = runMany(cfg, N, seedBase);
    let repSeed = many.repSeed;
    if (reroll[G.n]) { // 재추첨: 분포에서 무작위 1경기
      const r = mulberry32(seedBase + 17)();
      repSeed = many.allSeeds[Math.floor(r * many.allSeeds.length)].s;
    }
    const rep = simulateGame(cfg, mulberry32(repSeed), true);
    const stateBefore = { kt: wins.kt, ss: wins.ss, tie: wins.tie };
    const decidedBefore = wins.kt >= 4 || wins.ss >= 4;
    if (!decidedBefore) { wins[rep.winner]++; }
    games.push({ G, cfg: { starters, totalWar, usageSnap, day: dayNum(G.date) }, many, rep, stateBefore, decidedBefore, stateAfter: { ...wins } });
    // 사용 기록 반영
    const day = dayNum(G.date);
    for (const t of ['kt', 'ss']) rep.apps[t].forEach(a => {
      (usage[t][a.name] || (usage[t][a.name] = [])).push({ day, pitches: a.pitches, start: a.start });
    });
  }
  // 시리즈 몬테카를로
  const probs = games.map(g => ({ kt: g.many.kt / g.many.N, ss: g.many.ss / g.many.N, tie: g.many.tie / g.many.N }));
  const series = seriesMC(probs, 40000);
  return { games, series, probs };
}

function seriesMC(probs, M) {
  const rng = mulberry32(99173);
  const out = { kt: 0, ss: 0, none: 0, combos: {}, length: {} };
  for (let m = 0; m < M; m++) {
    let w = { kt: 0, ss: 0, tie: 0 }, done = null, g = 0;
    for (; g < probs.length; g++) {
      const p = probs[g], x = rng();
      if (x < p.kt) w.kt++; else if (x < p.kt + p.ss) w.ss++; else w.tie++;
      if (w.kt === 4) { done = 'kt'; break; }
      if (w.ss === 4) { done = 'ss'; break; }
    }
    if (!done) { out.none++; continue; }
    out[done]++;
    const key = `${done}|${done === 'kt' ? w.kt : w.ss}-${done === 'kt' ? w.ss : w.kt}${w.tie ? '-' + w.tie : ''}`;
    out.combos[key] = (out.combos[key] || 0) + 1;
    out.length[g + 1] = (out.length[g + 1] || 0) + 1;
  }
  out.M = M;
  return out;
}

if (typeof module !== 'undefined') module.exports = { TEAMS, GAMES, buildPath, simulateGame, runMany, mulberry32, relieverAvailable, restDays };
