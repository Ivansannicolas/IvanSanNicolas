import React from 'react';
import NotFound from '../NotFound';
import cardsStore from '../../../stores/store'
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';

jest.mock('../../../stores/store')

describe('NotFound', () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('to be defined - NotFound exists', () => {
		act(() => {

			render(
				<BrowserRouter>
					<NotFound />
				</BrowserRouter>,
				container
			);
		});

		expect(
			document.getElementsByClassName('landing-not-found')[0]
		).toBeDefined();
	});
	
	test('llama a la función back cuando se hace click', () => {

		act(() => {
			render(
				<BrowserRouter>
					<NotFound />
				</BrowserRouter>,
				container
			);
		});
		
		const button = document.getElementById('button-back');

		act(() => {
			button.dispatchEvent(
				new MouseEvent('click', { bubbles: true, cancelable: true })
			);
		});

		expect(cardsStore.goBack).toHaveBeenCalled();
	});

});
