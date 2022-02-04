import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData=[{
    title:'Cases',
    path:'/cases',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title:'SKX007',
            path:'/cases/skx007',
            icon:'IoIcons.IoIosPaper',

        },
        {
            title:'SKX013',
            path:'/cases/skx013',
            icon:'IoIcons.IoIosPaper',

        }
    ]

},
{
    title:'Bezels',
    path:'/bezels',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
        {
            title:'CT202CE Polished',
            path:'/bezels/ct202ce polished',
            icon:'IoIcons.IoIosPaper',

        },
        {
            title:'CT202CE Black',
            path:'/bezels/ct202ce polished',
            icon:'IoIcons.IoIosPaper',

        }
    ]

}
]
