import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test('Deve adicionar um comentário', () => {
        render(<PostComment />)
        const textArea = screen.getByTestId('comment-id')
        const button = screen.getByTestId('btn-comment-id')
        fireEvent.change(textArea, { target: { value: 'Comentário de teste' } })
        fireEvent.click(button)
        expect(screen.getByTestId('post-comment-content-id')).toHaveTextContent('Comentário de teste')
    });
});