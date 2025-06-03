// 🏆 Snack 1
function getInitials(fullName) {
    return fullName
        .split(' ')
        .map(name => name[0].toUpperCase())
        .join('');
}

// 🏆 Snack 2, 4, 6
function createSlug(title) {
    if (!title || typeof title !== 'string' || title.trim() === '') {
        throw new Error('Titolo non valido');
    }
    return title.toLowerCase().replaceAll(" ", '-');
}

// 🏆 Snack 3
function average(numbers) {
    const sum = numbers.reduce((acc, val) => acc + val, 0);
    return sum / numbers.length;
}

// 🏆 Snack 5
function isPalindrome(word) {
    const clean = word.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
}

// 🏆 Snack 7
function findPostById(posts, id) {
    if (isNaN(id)) {
        throw new Error(`${id} non e un id`);
    }

    posts.forEach(p => {
        if (
            p.id === undefined ||
            p.title === undefined ||
            p.slug === undefined
        ) {
            throw new Error("l'array non è nel formato corretto");
        }
    });

    return posts.find(post => post.id === id) || null;
}

module.exports = {
    getInitials,
    createSlug,
    average,
    isPalindrome,
    findPostById
};
