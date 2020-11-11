import React from 'react';
import MyDecks from '../MyDecks';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
import { render, unmountComponentAtNode } from 'react-dom';
import store from '../../../../../stores/store';

describe('MyDecks', () => {
	let container = null;

	beforeEach(() => {
		container = document.createElement('div');
		document.body.appendChild(container);
		let decks = [
			{
				title: 'Deck 1',
				url: './decks',
				imagealt: 'https://images.pokemontcg.io/pl3/93_hires.png'
			},
		];
		store.setCardsCorrectly(decks);
	});

	afterEach(() => {
		unmountComponentAtNode(container);
		container.remove();
		container = null;
	});

	test('should have a title', () => {
		act(() => {
			render(
				<BrowserRouter>
					<MyDecks />
				</BrowserRouter>,
				container
			);
		});
		expect(document.getElementById('image__cards-deck')).toBeDefined();
	});

});
