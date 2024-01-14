export const reviews = [
    'We stopped for a breakfast without knowing this cafe and left with a huge smile. Food was excellent and so beautifully presented. Sat oitside on a pleasant morning and had fun and a feast.',
    'Honestly, incredible ! Such a cute cozy atmosphere with incredible fast, working hard staff food was out in no time, tasted fresh and generous size portions!! Ice mochas were amazing and definitely would love to try their cold brew next time ! You can see the locals lining up just before school and work couldn’t Blame them. Very respectful and quiet Community !',
    'Fantastic little cafe with Campos coffee and great food. Tucked out of the way this little gem of a cafe was easy access for us to visit. We really enjoyed our shakshuka and coffees. Thanks for having us and will be back.'
];


export const reviewByIndex = (index: number): string => reviews[index % reviews.length]
