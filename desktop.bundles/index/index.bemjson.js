({
    block: 'b-page',
    title: 'Title of the page',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'index/_index.css', ie: false },
        { elem: 'css', url: 'index/_inndex', ie: true },
        { elem: 'meta', attrs: { name: 'description', content: '' }},
        { elem: 'meta', attrs: { name: 'keywords', content: '' }}
    ],
    content:[
        {
            block: 'header',
            content: [
                'header content goes here'
            ]
        },
        {
            block: 'content',
            content: [
                'main content'
            ]
        },
        {
            block: 'footer',
            content: [
                'footer content goes here'
            ]
        },
        { block: 'i-jquery', mods: { version: '1.8.3' } },
        { elem: 'js', url: '_index.js' }
    ]
})
