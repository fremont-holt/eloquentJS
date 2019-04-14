function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let name = groupName(item);
    let known = counts.findIndex(c => c.name == name);
    if (known == -1) {
      counts.push({ name, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}

function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script;
    }
  }
  return null;
}

function dominantDirection(text) {
  const charScripts = [];
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    const script = characterScript(code);
    if (script) {
      charScripts.push(script);
    }
  }

  const counts = countBy(charScripts, script => script.direction);

  const highestCount = counts.reduce((acc, count) => {
    if (!acc.count || acc.count < count.count) {
      return count;
    }
    return acc;
  });

  return highestCount.name;
}

console.log(dominantDirection("Hello!"));
// → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl
