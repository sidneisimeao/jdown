const fs = require('fs');
const path = require('path');
const jdown = require('jdown');

jdown('content', { assets: { output: 'public' } }).then(content => {
	content.posts.map(post => fs.writeFileSync(path.join(__dirname, post.slug + '.json'), JSON.stringify(post, null, 2), 'utf8'));
});
