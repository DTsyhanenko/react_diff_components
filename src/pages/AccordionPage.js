import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: 'df76',
            label: 'Lorem ipsum dolor sit amet.',
            content: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
        {
            id: 'w45b',
            label: 'Consetetur sadipscing elitr.',
            content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
        },
        {
            id: '6r89',
            label: 'Stet clita kasd gubergren.',
            content: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.'
        },
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;