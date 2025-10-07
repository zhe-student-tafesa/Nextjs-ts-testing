import { render, screen } from '@testing-library/react';
 
import '@testing-library/jest-dom';
import React from 'react';
import BlogCard from '@/components/blogCard/BlogCard';

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, ...rest }: any) => <img {...rest} />, // Replace it with a regular img tag, and manually remove the "fill" property.
}));

// Mock Next.js Link
jest.mock('next/link', () => {
  return ({ children, href }: any) => <a href={href}>{children}</a>;
});

describe('BlogCard', () => {
  const post = {
    id: 12,
    img: 'https://images.pexels.com/photos/32276165/pexels-photo-32276165.jpeg',
    title: 'Test Blog',
    body: 'This is a test blog post',
    createdAt: new Date('2025-10-03T00:00:00Z'),
    slug: 'test-blog',
  };

  it('renders title, description and date', () => {
    render(<BlogCard post={post} />);

    expect(screen.getByText(post.title)).toBeInTheDocument();
    expect(screen.getByText(post.body)).toBeInTheDocument();
    expect(screen.getByText('2025.10.03')).toBeInTheDocument(); // Date format
  });

  it('renders image with correct src', () => {
    render(<BlogCard post={post} />);
    const img = screen.getByRole('img') as HTMLImageElement;
    expect(img.src).toBe(post.img);
  });

  it('renders without img when img is not provided: use default img', () => {
  const postWithoutImg = { ...post, img: undefined };
  render(<BlogCard post={postWithoutImg} />);
  const img = screen.getByRole('img') as HTMLImageElement;
  expect(img.src).toBe("https://staging.miningskills.com.au/wp-content/uploads/2024/05/Post-6.jpg");
});

  it('renders link with correct href', () => {
    render(<BlogCard post={post} />);
    const link = screen.getByRole('link') as HTMLAnchorElement;
    expect(link.href).toContain(`/blog/${post.slug}`);
  });
});
