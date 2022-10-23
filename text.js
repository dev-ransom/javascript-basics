var links = document.getElementsByTagName('a')
let sunday = [
  'stanley',
  'daniel',
  'ransome',
  'destiny',
  'gideon',
  'george',
  'benjamin',
]
let div_fam = document.querySelector('.family')
let parent_div = document.querySelector('.parent')
console.log(div_fam)

for (let i = 0; i < sunday.length; i++) {
 let para = document.createElement("p")
 parent_div. append(para)
para.innerHTML = sunday[i]
}

for (let i = 0; i < links.length; i++) {
  var class_link = (links[i].className = 'link-' + i)
}
