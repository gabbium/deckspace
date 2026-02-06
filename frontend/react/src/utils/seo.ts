export const seo = (title: string, description?: string) => {
  return [
    { title },
    ...(description
      ? [
          {
            name: 'description',
            content: description,
          },
        ]
      : []),
  ];
};
