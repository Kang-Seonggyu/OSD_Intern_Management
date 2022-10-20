function TestApi () {
    const data = { username: 'example' };
    fetch('https://example.com/profile', {
        method: 'POST', // 또는 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => {
            console.log('성공:', data);
        })
        .catch((error) => {
            console.error('실패:', error);
        });
    }

export default TestApi