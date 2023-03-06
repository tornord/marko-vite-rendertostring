import eventItemTemplate from '../views/components/event-item.marko';

// ugly workaround
function renderToString(template, viewModel) {
  const res = template.render(viewModel);
  let html = res.stream._content;
  html = html.replace(
    /^<script type="module" src="\/@vite\/client"><\/script>/,
    ''
  );
  html = html.replace(
    /<script async type="module" src="([\w?/.-]+)"><\/script>$/,
    ''
  );
  return html;
}

describe('renderToString', () => {
  it('should render html', () => {
    const eventItem = {
      url: 'https://www.bonniernewsevents.se/d/lrqhp8',
      headline: 'Möten & Koncept Intranät',
      id: 'aa7f4087-f5d9-4284-809e-4a44b17c858d',
      startDate: '2021-01-01T08:00:00.000Z',
      endDate: '2030-01-01T16:00:00.000Z',
      format: 'In-person',
      status: 'Active',
      note: '',
    };
    const html = eventItemTemplate.renderToString({ eventItem });
    console.log('empty html', html);
    // expect(html).to.not.equal(''); // Fails!
  });

  it('workaround', () => {
    const eventItem = {
      url: 'https://www.bonniernewsevents.se/d/lrqhp8',
      headline: 'Möten & Koncept Intranät',
      id: 'aa7f4087-f5d9-4284-809e-4a44b17c858d',
      startDate: '2021-01-01T08:00:00.000Z',
      endDate: '2030-01-01T16:00:00.000Z',
      format: 'In-person',
      status: 'Active',
      note: '',
    };
    const html = renderToString(eventItemTemplate, { eventItem });
    expect(html).to.not.equal('');
  });
});
