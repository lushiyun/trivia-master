import { useColorMode, Box } from '@chakra-ui/core';

const Logo = (props) => {
  const { colorMode } = useColorMode();
  const fillColor = colorMode === 'light' ? '#2D3748' : '#F7FAFC';
  const fillPurple = colorMode === 'light' ? '#6b46c1' : '#FAF5FF';

  return (
    <Box
      as="svg"
      mt={1}
      viewBox="0 0 765 97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M33.1719 62.0781C33.1719 63.5781 33.375 64.7812 33.7812 65.6875C34.2188 66.5938 34.7812 67.2969 35.4688 67.7969C36.1875 68.2656 37.0312 68.5781 38 68.7344C38.9688 68.8906 39.9844 68.9688 41.0469 68.9688H43.25V73H13.3906V68.9688H15.5938C16.6562 68.9688 17.6562 68.9062 18.5938 68.7812C19.5625 68.625 20.4062 68.3281 21.125 67.8906C21.8438 67.4531 22.4062 66.8125 22.8125 65.9688C23.25 65.0938 23.4688 63.9531 23.4688 62.5469V9.25H14.2812C12.875 9.25 11.6875 9.46875 10.7188 9.90625C9.78125 10.3125 9 10.875 8.375 11.5938C7.78125 12.3125 7.32812 13.1562 7.01562 14.125C6.73438 15.0625 6.53125 16.0625 6.40625 17.125L5.89062 21.25H0.921875L1.39062 4.46875H55.4375L55.9062 21.25H50.9375L50.4688 17.125C50.3438 16.0625 50.125 15.0625 49.8125 14.125C49.5 13.1562 49.0469 12.3125 48.4531 11.5938C47.8594 10.875 47.0781 10.3125 46.1094 9.90625C45.1406 9.46875 43.9375 9.25 42.5 9.25H33.1719V62.0781ZM88.7656 73H61.0625V68.9688H61.3438C62.4375 68.9688 63.4531 68.8906 64.3906 68.7344C65.3594 68.5781 66.1875 68.2656 66.875 67.7969C67.5938 67.2969 68.1562 66.5938 68.5625 65.6875C69 64.7812 69.2188 63.5781 69.2188 62.0781V32.125C69.2188 30.7188 69 29.5938 68.5625 28.75C68.1562 27.875 67.5938 27.2031 66.875 26.7344C66.1562 26.2656 65.3125 25.9531 64.3438 25.7969C63.4062 25.6406 62.4062 25.5625 61.3438 25.5625H61.0625V21.5312H75.8281L77.6562 31.0469H78.125C78.75 29.6094 79.3906 28.2656 80.0469 27.0156C80.7031 25.7344 81.5 24.625 82.4375 23.6875C83.4062 22.7188 84.5938 21.9688 86 21.4375C87.4062 20.875 89.1719 20.5938 91.2969 20.5938C94.7969 20.5938 97.3906 21.2031 99.0781 22.4219C100.797 23.6406 101.656 25.3594 101.656 27.5781C101.656 28.5781 101.484 29.5 101.141 30.3438C100.828 31.1875 100.312 31.9219 99.5938 32.5469C98.875 33.1406 97.9531 33.6094 96.8281 33.9531C95.7031 34.2656 94.3281 34.4219 92.7031 34.4219C92.7031 31.7656 92.3281 29.8594 91.5781 28.7031C90.8281 27.5156 89.5156 26.9219 87.6406 26.9219C86.4531 26.9219 85.3906 27.2656 84.4531 27.9531C83.5156 28.6094 82.6875 29.5 81.9688 30.625C81.2812 31.7188 80.6875 32.9844 80.1875 34.4219C79.7188 35.8594 79.3281 37.3438 79.0156 38.875C78.7344 40.375 78.5312 41.875 78.4062 43.375C78.2812 44.875 78.2188 46.2344 78.2188 47.4531V62.5469C78.2188 63.9531 78.4219 65.0938 78.8281 65.9688C79.2656 66.8125 79.8438 67.4531 80.5625 67.8906C81.2812 68.3281 82.1094 68.625 83.0469 68.7812C84.0156 68.9062 85.0312 68.9688 86.0938 68.9688H88.7656V73ZM106.625 68.9688C107.688 68.9688 108.688 68.9062 109.625 68.7812C110.594 68.625 111.438 68.3281 112.156 67.8906C112.875 67.4531 113.438 66.8125 113.844 65.9688C114.281 65.0938 114.5 63.9531 114.5 62.5469V32.125C114.5 30.7188 114.281 29.5938 113.844 28.75C113.438 27.875 112.875 27.2031 112.156 26.7344C111.438 26.2656 110.594 25.9531 109.625 25.7969C108.688 25.6406 107.688 25.5625 106.625 25.5625H106.344V21.5312H123.5V62.0781C123.5 63.5781 123.703 64.7812 124.109 65.6875C124.547 66.5938 125.109 67.2969 125.797 67.7969C126.516 68.2656 127.359 68.5781 128.328 68.7344C129.297 68.8906 130.312 68.9688 131.375 68.9688H132.641V73H105.359V68.9688H106.625ZM113.141 5.96875C113.141 4.84375 113.281 3.90625 113.562 3.15625C113.844 2.40625 114.234 1.79688 114.734 1.32812C115.234 0.859375 115.812 0.53125 116.469 0.34375C117.125 0.15625 117.844 0.0625 118.625 0.0625C119.375 0.0625 120.078 0.15625 120.734 0.34375C121.391 0.53125 121.953 0.859375 122.422 1.32812C122.922 1.79688 123.312 2.40625 123.594 3.15625C123.906 3.90625 124.062 4.84375 124.062 5.96875C124.062 7.09375 123.906 8.03125 123.594 8.78125C123.312 9.53125 122.922 10.1406 122.422 10.6094C121.953 11.0781 121.391 11.4219 120.734 11.6406C120.078 11.8281 119.375 11.9219 118.625 11.9219C117.844 11.9219 117.125 11.8281 116.469 11.6406C115.812 11.4219 115.234 11.0781 114.734 10.6094C114.234 10.1406 113.844 9.53125 113.562 8.78125C113.281 8.03125 113.141 7.09375 113.141 5.96875ZM134.281 25.5625V21.5312H158.281V25.5625H157.062C155.125 25.5625 153.672 25.9375 152.703 26.6875C151.766 27.4375 151.297 28.6094 151.297 30.2031C151.297 30.7344 151.359 31.2812 151.484 31.8438C151.609 32.375 151.797 33 152.047 33.7188L158.562 51.8594C158.969 52.9844 159.391 54.2344 159.828 55.6094C160.266 56.9531 160.672 58.2812 161.047 59.5938C161.453 60.9062 161.812 62.1562 162.125 63.3438C162.438 64.5 162.656 65.4844 162.781 66.2969H163.109C163.266 65.6094 163.516 64.7656 163.859 63.7656C164.234 62.7344 164.641 61.625 165.078 60.4375C165.547 59.2188 166.016 57.9844 166.484 56.7344C166.984 55.4844 167.453 54.2812 167.891 53.125L174.781 34.4219C175.094 33.6406 175.312 32.8906 175.438 32.1719C175.594 31.4531 175.672 30.8281 175.672 30.2969C175.672 28.6406 175.141 27.4375 174.078 26.6875C173.047 25.9375 171.469 25.5625 169.344 25.5625H168.641V21.5312H189.219V25.5625H188.047C187.109 25.5625 186.312 25.6719 185.656 25.8906C185 26.0781 184.406 26.4531 183.875 27.0156C183.344 27.5781 182.828 28.3438 182.328 29.3125C181.859 30.2812 181.328 31.5312 180.734 33.0625L165.594 73H156.828L141.406 30.6719C141.031 29.6719 140.641 28.8438 140.234 28.1875C139.828 27.5312 139.359 27.0156 138.828 26.6406C138.297 26.2344 137.688 25.9531 137 25.7969C136.312 25.6406 135.5 25.5625 134.562 25.5625H134.281ZM192.969 68.9688C194.031 68.9688 195.031 68.9062 195.969 68.7812C196.938 68.625 197.781 68.3281 198.5 67.8906C199.219 67.4531 199.781 66.8125 200.188 65.9688C200.625 65.0938 200.844 63.9531 200.844 62.5469V32.125C200.844 30.7188 200.625 29.5938 200.188 28.75C199.781 27.875 199.219 27.2031 198.5 26.7344C197.781 26.2656 196.938 25.9531 195.969 25.7969C195.031 25.6406 194.031 25.5625 192.969 25.5625H192.688V21.5312H209.844V62.0781C209.844 63.5781 210.047 64.7812 210.453 65.6875C210.891 66.5938 211.453 67.2969 212.141 67.7969C212.859 68.2656 213.703 68.5781 214.672 68.7344C215.641 68.8906 216.656 68.9688 217.719 68.9688H218.984V73H191.703V68.9688H192.969ZM199.484 5.96875C199.484 4.84375 199.625 3.90625 199.906 3.15625C200.188 2.40625 200.578 1.79688 201.078 1.32812C201.578 0.859375 202.156 0.53125 202.812 0.34375C203.469 0.15625 204.188 0.0625 204.969 0.0625C205.719 0.0625 206.422 0.15625 207.078 0.34375C207.734 0.53125 208.297 0.859375 208.766 1.32812C209.266 1.79688 209.656 2.40625 209.938 3.15625C210.25 3.90625 210.406 4.84375 210.406 5.96875C210.406 7.09375 210.25 8.03125 209.938 8.78125C209.656 9.53125 209.266 10.1406 208.766 10.6094C208.297 11.0781 207.734 11.4219 207.078 11.6406C206.422 11.8281 205.719 11.9219 204.969 11.9219C204.188 11.9219 203.469 11.8281 202.812 11.6406C202.156 11.4219 201.578 11.0781 201.078 10.6094C200.578 10.1406 200.188 9.53125 199.906 8.78125C199.625 8.03125 199.484 7.09375 199.484 5.96875ZM234.359 59.0781C234.359 62.0781 234.984 64.3281 236.234 65.8281C237.516 67.2969 239.484 68.0312 242.141 68.0312C244.078 68.0312 245.828 67.7188 247.391 67.0938C248.984 66.4688 250.328 65.5781 251.422 64.4219C252.547 63.2656 253.406 61.8594 254 60.2031C254.594 58.5469 254.891 56.7031 254.891 54.6719V46.8906L248.75 47.1719C246.031 47.2969 243.75 47.6406 241.906 48.2031C240.094 48.7344 238.625 49.5 237.5 50.5C236.375 51.4688 235.562 52.6719 235.062 54.1094C234.594 55.5469 234.359 57.2031 234.359 59.0781ZM245.984 25.375C244.141 25.375 242.641 25.6406 241.484 26.1719C240.359 26.6719 239.469 27.3906 238.812 28.3281C238.188 29.2656 237.766 30.375 237.547 31.6562C237.328 32.9375 237.219 34.3281 237.219 35.8281C234.562 35.8281 232.531 35.375 231.125 34.4688C229.75 33.5625 229.062 32 229.062 29.7812C229.062 28.125 229.516 26.7188 230.422 25.5625C231.328 24.4062 232.562 23.4688 234.125 22.75C235.719 22 237.562 21.4531 239.656 21.1094C241.75 20.7656 243.984 20.5938 246.359 20.5938C249.297 20.5938 251.859 20.8906 254.047 21.4844C256.234 22.0469 258.062 22.9844 259.531 24.2969C261 25.6094 262.094 27.3281 262.812 29.4531C263.562 31.5469 263.938 34.125 263.938 37.1875V62.0781C263.938 63.4219 264.047 64.5312 264.266 65.4062C264.484 66.2812 264.828 66.9844 265.297 67.5156C265.766 68.0469 266.375 68.4219 267.125 68.6406C267.906 68.8594 268.828 68.9688 269.891 68.9688H270.172V73H257.188L255.688 64.75H254.891C253.891 66.0938 252.922 67.3281 251.984 68.4531C251.047 69.5781 250.016 70.5469 248.891 71.3594C247.766 72.1719 246.484 72.7969 245.047 73.2344C243.641 73.7031 241.938 73.9375 239.938 73.9375C237.812 73.9375 235.828 73.625 233.984 73C232.172 72.4062 230.594 71.4844 229.25 70.2344C227.938 68.9531 226.906 67.3594 226.156 65.4531C225.406 63.5156 225.031 61.2344 225.031 58.6094C225.031 53.5156 226.844 49.7344 230.469 47.2656C234.094 44.7969 239.578 43.4531 246.922 43.2344L254.891 42.9531V37.1875C254.891 35.4688 254.797 33.8906 254.609 32.4531C254.422 30.9844 254.016 29.7344 253.391 28.7031C252.766 27.6406 251.859 26.8281 250.672 26.2656C249.516 25.6719 247.953 25.375 245.984 25.375Z"
        fill={fillColor}
      />
      <path
        d="M310.625 3.48438C313.906 3.48438 316.75 3.76562 319.156 4.32812C321.594 4.85938 323.609 5.60938 325.203 6.57812C326.828 7.54688 328.031 8.6875 328.812 10C329.625 11.3125 330.031 12.7344 330.031 14.2656C330.031 15.2969 329.812 16.2344 329.375 17.0781C328.969 17.8906 328.391 18.5938 327.641 19.1875C326.891 19.75 326 20.1875 324.969 20.5C323.969 20.8125 322.875 20.9688 321.688 20.9688C321.688 19.4688 321.484 17.9844 321.078 16.5156C320.703 15.0469 320.062 13.7344 319.156 12.5781C318.281 11.3906 317.125 10.4375 315.688 9.71875C314.281 8.96875 312.531 8.59375 310.438 8.59375C306.812 8.59375 303.734 9.26562 301.203 10.6094C298.672 11.9219 296.609 13.8594 295.016 16.4219C293.422 18.9531 292.266 22.0938 291.547 25.8438C290.828 29.5625 290.469 33.8281 290.469 38.6406C290.469 42.9219 290.844 46.8438 291.594 50.4062C292.344 53.9688 293.531 57.0312 295.156 59.5938C296.781 62.125 298.844 64.0938 301.344 65.5C303.875 66.9062 306.906 67.6094 310.438 67.6094C312.781 67.6094 314.844 67.3906 316.625 66.9531C318.438 66.4844 320.031 65.875 321.406 65.125C322.781 64.375 323.984 63.5156 325.016 62.5469C326.078 61.5469 327.016 60.5156 327.828 59.4531C328.359 59.7969 328.797 60.2656 329.141 60.8594C329.484 61.4531 329.656 62.2344 329.656 63.2031C329.656 64.4219 329.234 65.6719 328.391 66.9531C327.578 68.2031 326.328 69.3438 324.641 70.375C322.953 71.4062 320.812 72.2656 318.219 72.9531C315.625 73.6094 312.547 73.9375 308.984 73.9375C304.203 73.9375 300 73.0938 296.375 71.4062C292.75 69.7188 289.703 67.3281 287.234 64.2344C284.797 61.1406 282.953 57.4219 281.703 53.0781C280.453 48.7344 279.828 43.9219 279.828 38.6406C279.828 33.4531 280.484 28.7031 281.797 24.3906C283.109 20.0781 285.047 16.375 287.609 13.2812C290.203 10.1875 293.422 7.78125 297.266 6.0625C301.109 4.34375 305.562 3.48438 310.625 3.48438ZM360.875 68.9688V73H335.047V68.9688H335.797C336.891 68.9688 337.906 68.8906 338.844 68.7344C339.812 68.5781 340.641 68.2656 341.328 67.7969C342.047 67.2969 342.609 66.5938 343.016 65.6875C343.453 64.7812 343.672 63.5781 343.672 62.0781V10.6094C343.672 9.20312 343.453 8.07812 343.016 7.23438C342.609 6.35938 342.047 5.6875 341.328 5.21875C340.609 4.75 339.766 4.45312 338.797 4.32812C337.859 4.17188 336.859 4.09375 335.797 4.09375H335.047V0.0625H352.719V21.1562C352.719 22.0312 352.703 22.9531 352.672 23.9219C352.641 24.8594 352.594 25.7344 352.531 26.5469C352.469 27.4844 352.406 28.4062 352.344 29.3125H352.812C355.688 23.5 360.391 20.5938 366.922 20.5938C369.641 20.5938 372.047 20.9688 374.141 21.7188C376.266 22.4375 378.047 23.5625 379.484 25.0938C380.922 26.5938 382.016 28.5312 382.766 30.9062C383.516 33.2812 383.891 36.1094 383.891 39.3906V62.0781C383.891 63.5781 384.078 64.7812 384.453 65.6875C384.828 66.5938 385.344 67.2969 386 67.7969C386.656 68.2656 387.438 68.5781 388.344 68.7344C389.25 68.8906 390.234 68.9688 391.297 68.9688H391.578V73H374.891V39.8594C374.891 37.7656 374.703 35.9062 374.328 34.2812C373.953 32.6562 373.344 31.2812 372.5 30.1562C371.688 29.0312 370.609 28.1875 369.266 27.625C367.922 27.0312 366.281 26.7344 364.344 26.7344C362.344 26.7344 360.609 27.1094 359.141 27.8594C357.703 28.5781 356.5 29.625 355.531 31C354.594 32.3438 353.891 33.9844 353.422 35.9219C352.953 37.8281 352.719 39.9531 352.719 42.2969V62.5469C352.719 63.9531 352.922 65.0938 353.328 65.9688C353.766 66.8125 354.344 67.4531 355.062 67.8906C355.781 68.3281 356.609 68.625 357.547 68.7812C358.516 68.9062 359.531 68.9688 360.594 68.9688H360.875ZM408.359 59.0781C408.359 62.0781 408.984 64.3281 410.234 65.8281C411.516 67.2969 413.484 68.0312 416.141 68.0312C418.078 68.0312 419.828 67.7188 421.391 67.0938C422.984 66.4688 424.328 65.5781 425.422 64.4219C426.547 63.2656 427.406 61.8594 428 60.2031C428.594 58.5469 428.891 56.7031 428.891 54.6719V46.8906L422.75 47.1719C420.031 47.2969 417.75 47.6406 415.906 48.2031C414.094 48.7344 412.625 49.5 411.5 50.5C410.375 51.4688 409.562 52.6719 409.062 54.1094C408.594 55.5469 408.359 57.2031 408.359 59.0781ZM419.984 25.375C418.141 25.375 416.641 25.6406 415.484 26.1719C414.359 26.6719 413.469 27.3906 412.812 28.3281C412.188 29.2656 411.766 30.375 411.547 31.6562C411.328 32.9375 411.219 34.3281 411.219 35.8281C408.562 35.8281 406.531 35.375 405.125 34.4688C403.75 33.5625 403.062 32 403.062 29.7812C403.062 28.125 403.516 26.7188 404.422 25.5625C405.328 24.4062 406.562 23.4688 408.125 22.75C409.719 22 411.562 21.4531 413.656 21.1094C415.75 20.7656 417.984 20.5938 420.359 20.5938C423.297 20.5938 425.859 20.8906 428.047 21.4844C430.234 22.0469 432.062 22.9844 433.531 24.2969C435 25.6094 436.094 27.3281 436.812 29.4531C437.562 31.5469 437.938 34.125 437.938 37.1875V62.0781C437.938 63.4219 438.047 64.5312 438.266 65.4062C438.484 66.2812 438.828 66.9844 439.297 67.5156C439.766 68.0469 440.375 68.4219 441.125 68.6406C441.906 68.8594 442.828 68.9688 443.891 68.9688H444.172V73H431.188L429.688 64.75H428.891C427.891 66.0938 426.922 67.3281 425.984 68.4531C425.047 69.5781 424.016 70.5469 422.891 71.3594C421.766 72.1719 420.484 72.7969 419.047 73.2344C417.641 73.7031 415.938 73.9375 413.938 73.9375C411.812 73.9375 409.828 73.625 407.984 73C406.172 72.4062 404.594 71.4844 403.25 70.2344C401.938 68.9531 400.906 67.3594 400.156 65.4531C399.406 63.5156 399.031 61.2344 399.031 58.6094C399.031 53.5156 400.844 49.7344 404.469 47.2656C408.094 44.7969 413.578 43.4531 420.922 43.2344L428.891 42.9531V37.1875C428.891 35.4688 428.797 33.8906 428.609 32.4531C428.422 30.9844 428.016 29.7344 427.391 28.7031C426.766 27.6406 425.859 26.8281 424.672 26.2656C423.516 25.6719 421.953 25.375 419.984 25.375ZM476.844 68.9688V73H451.016V68.9688H452.281C453.375 68.9688 454.375 68.8906 455.281 68.7344C456.188 68.5781 456.969 68.2656 457.625 67.7969C458.281 67.2969 458.781 66.5938 459.125 65.6875C459.5 64.7812 459.688 63.5781 459.688 62.0781V32.125C459.688 30.7188 459.5 29.5938 459.125 28.75C458.75 27.875 458.234 27.2031 457.578 26.7344C456.922 26.2656 456.141 25.9531 455.234 25.7969C454.328 25.6406 453.344 25.5625 452.281 25.5625H452V21.5312H467.047L468.312 29.3125H468.781C469.75 27.5312 470.766 26.0781 471.828 24.9531C472.891 23.7969 474.016 22.9062 475.203 22.2812C476.422 21.625 477.688 21.1875 479 20.9688C480.344 20.7188 481.766 20.5938 483.266 20.5938C484.828 20.5938 486.312 20.75 487.719 21.0625C489.125 21.375 490.422 21.875 491.609 22.5625C492.828 23.25 493.906 24.1562 494.844 25.2812C495.812 26.375 496.594 27.7188 497.188 29.3125H497.984C498.953 27.5312 500 26.0781 501.125 24.9531C502.25 23.7969 503.438 22.9062 504.688 22.2812C505.969 21.625 507.297 21.1875 508.672 20.9688C510.078 20.7188 511.531 20.5938 513.031 20.5938C515.469 20.5938 517.656 20.9688 519.594 21.7188C521.531 22.4375 523.172 23.5625 524.516 25.0938C525.859 26.5938 526.891 28.5312 527.609 30.9062C528.328 33.2812 528.688 36.1094 528.688 39.3906V62.0781C528.688 63.5781 528.875 64.7812 529.25 65.6875C529.625 66.5938 530.141 67.2969 530.797 67.7969C531.453 68.2656 532.234 68.5781 533.141 68.7344C534.047 68.8906 535.031 68.9688 536.094 68.9688H536.375V73H519.688V39.8594C519.688 37.7656 519.5 35.9062 519.125 34.2812C518.781 32.6562 518.203 31.2812 517.391 30.1562C516.609 29.0312 515.578 28.1875 514.297 27.625C513.016 27.0312 511.453 26.7344 509.609 26.7344C507.609 26.7344 505.922 27.125 504.547 27.9062C503.203 28.6562 502.109 29.6875 501.266 31C500.422 32.3125 499.812 33.8281 499.438 35.5469C499.094 37.2656 498.922 39.0938 498.922 41.0312V62.0781C498.922 63.5781 499.109 64.7812 499.484 65.6875C499.859 66.5938 500.375 67.2969 501.031 67.7969C501.688 68.2656 502.469 68.5781 503.375 68.7344C504.281 68.8906 505.266 68.9688 506.328 68.9688H506.609V73H489.922V39.8594C489.922 37.7656 489.734 35.9062 489.359 34.2812C489.016 32.6562 488.438 31.2812 487.625 30.1562C486.844 29.0312 485.812 28.1875 484.531 27.625C483.25 27.0312 481.688 26.7344 479.844 26.7344C477.75 26.7344 475.984 27.1562 474.547 28C473.141 28.8438 472 29.9844 471.125 31.4219C470.25 32.8594 469.625 34.5156 469.25 36.3906C468.875 38.2656 468.688 40.2344 468.688 42.2969V62.5469C468.688 63.9531 468.891 65.0938 469.297 65.9688C469.734 66.8125 470.312 67.4531 471.031 67.8906C471.75 68.3281 472.578 68.625 473.516 68.7812C474.484 68.9062 475.5 68.9688 476.562 68.9688H476.844ZM571.531 26.7344C569.031 26.7344 566.938 27.1562 565.25 28C563.594 28.8125 562.266 30.0625 561.266 31.75C560.266 33.4375 559.547 35.5625 559.109 38.125C558.703 40.6875 558.5 43.7031 558.5 47.1719C558.5 50.5156 558.703 53.4688 559.109 56.0312C559.547 58.5938 560.266 60.75 561.266 62.5C562.297 64.25 563.641 65.5781 565.297 66.4844C566.984 67.3594 569.094 67.7969 571.625 67.7969C573.75 67.7969 575.547 67.3594 577.016 66.4844C578.516 65.5781 579.734 64.25 580.672 62.5C581.641 60.75 582.344 58.5938 582.781 56.0312C583.219 53.4375 583.438 50.4531 583.438 47.0781C583.438 43.6719 583.219 40.7031 582.781 38.1719C582.344 35.6094 581.641 33.4844 580.672 31.7969C579.734 30.1094 578.5 28.8438 576.969 28C575.469 27.1562 573.656 26.7344 571.531 26.7344ZM592.766 47.1719C592.766 51.7969 592.328 55.7969 591.453 59.1719C590.609 62.5469 589.359 65.3281 587.703 67.5156C586.047 69.7031 584 71.3281 581.562 72.3906C579.125 73.4219 576.328 73.9375 573.172 73.9375C571.328 73.9375 569.656 73.7344 568.156 73.3281C566.656 72.9219 565.297 72.3438 564.078 71.5938C562.891 70.8438 561.828 69.9531 560.891 68.9219C559.984 67.8906 559.188 66.75 558.5 65.5H558.125C558.188 67.1562 558.25 68.7031 558.312 70.1406C558.344 70.7344 558.359 71.3594 558.359 72.0156C558.391 72.6406 558.406 73.2344 558.406 73.7969C558.438 74.3594 558.453 74.8594 558.453 75.2969C558.484 75.7656 558.5 76.125 558.5 76.375V85.5625C558.5 86.9688 558.703 88.0938 559.109 88.9375C559.547 89.8125 560.125 90.4688 560.844 90.9062C561.562 91.375 562.391 91.6719 563.328 91.7969C564.297 91.9531 565.312 92.0312 566.375 92.0312H566.656V96.0625H540.828V92.0312H541.578C542.672 92.0312 543.688 91.9531 544.625 91.7969C545.594 91.6406 546.422 91.3125 547.109 90.8125C547.828 90.3438 548.391 89.6406 548.797 88.7031C549.234 87.7969 549.453 86.5938 549.453 85.0938V32.125C549.453 30.7188 549.234 29.5938 548.797 28.75C548.391 27.875 547.828 27.2031 547.109 26.7344C546.391 26.2656 545.547 25.9531 544.578 25.7969C543.641 25.6406 542.641 25.5625 541.578 25.5625H540.359V21.5312H557.141L558.125 30.2031H558.5C559.219 28.7344 560.031 27.4062 560.938 26.2188C561.844 25.0312 562.891 24.0312 564.078 23.2188C565.266 22.375 566.609 21.7344 568.109 21.2969C569.609 20.8281 571.297 20.5938 573.172 20.5938C576.328 20.5938 579.125 21.125 581.562 22.1875C584 23.2188 586.047 24.8281 587.703 27.0156C589.359 29.1719 590.609 31.9219 591.453 35.2656C592.328 38.6094 592.766 42.5781 592.766 47.1719ZM601.531 68.9688C602.594 68.9688 603.594 68.9062 604.531 68.7812C605.5 68.625 606.344 68.3281 607.062 67.8906C607.781 67.4531 608.344 66.8125 608.75 65.9688C609.188 65.0938 609.406 63.9531 609.406 62.5469V32.125C609.406 30.7188 609.188 29.5938 608.75 28.75C608.344 27.875 607.781 27.2031 607.062 26.7344C606.344 26.2656 605.5 25.9531 604.531 25.7969C603.594 25.6406 602.594 25.5625 601.531 25.5625H601.25V21.5312H618.406V62.0781C618.406 63.5781 618.609 64.7812 619.016 65.6875C619.453 66.5938 620.016 67.2969 620.703 67.7969C621.422 68.2656 622.266 68.5781 623.234 68.7344C624.203 68.8906 625.219 68.9688 626.281 68.9688H627.547V73H600.266V68.9688H601.531ZM608.047 5.96875C608.047 4.84375 608.188 3.90625 608.469 3.15625C608.75 2.40625 609.141 1.79688 609.641 1.32812C610.141 0.859375 610.719 0.53125 611.375 0.34375C612.031 0.15625 612.75 0.0625 613.531 0.0625C614.281 0.0625 614.984 0.15625 615.641 0.34375C616.297 0.53125 616.859 0.859375 617.328 1.32812C617.828 1.79688 618.219 2.40625 618.5 3.15625C618.812 3.90625 618.969 4.84375 618.969 5.96875C618.969 7.09375 618.812 8.03125 618.5 8.78125C618.219 9.53125 617.828 10.1406 617.328 10.6094C616.859 11.0781 616.297 11.4219 615.641 11.6406C614.984 11.8281 614.281 11.9219 613.531 11.9219C612.75 11.9219 612.031 11.8281 611.375 11.6406C610.719 11.4219 610.141 11.0781 609.641 10.6094C609.141 10.1406 608.75 9.53125 608.469 8.78125C608.188 8.03125 608.047 7.09375 608.047 5.96875ZM678.922 47.1719C678.922 56.2031 677 62.9219 673.156 67.3281C669.344 71.7344 663.75 73.9375 656.375 73.9375C652.906 73.9375 649.797 73.3906 647.047 72.2969C644.297 71.2031 641.953 69.5469 640.016 67.3281C638.109 65.1094 636.641 62.3281 635.609 58.9844C634.609 55.6094 634.109 51.6719 634.109 47.1719C634.109 38.2031 636 31.5312 639.781 27.1562C643.594 22.7812 649.219 20.5938 656.656 20.5938C660.125 20.5938 663.234 21.1406 665.984 22.2344C668.734 23.2969 671.062 24.9375 672.969 27.1562C674.906 29.3438 676.375 32.1094 677.375 35.4531C678.406 38.7656 678.922 42.6719 678.922 47.1719ZM643.391 47.1719C643.391 50.7344 643.625 53.875 644.094 56.5938C644.562 59.3125 645.312 61.5938 646.344 63.4375C647.406 65.25 648.766 66.625 650.422 67.5625C652.109 68.5 654.156 68.9688 656.562 68.9688C658.969 68.9688 661 68.5 662.656 67.5625C664.312 66.625 665.656 65.25 666.688 63.4375C667.719 61.5938 668.453 59.3125 668.891 56.5938C669.359 53.875 669.594 50.7344 669.594 47.1719C669.594 43.6094 669.359 40.4844 668.891 37.7969C668.422 35.1094 667.672 32.875 666.641 31.0938C665.609 29.2812 664.25 27.9219 662.562 27.0156C660.906 26.1094 658.875 25.6562 656.469 25.6562C654.062 25.6562 652.031 26.1094 650.375 27.0156C648.719 27.9219 647.375 29.2812 646.344 31.0938C645.312 32.875 644.562 35.1094 644.094 37.7969C643.625 40.4844 643.391 43.6094 643.391 47.1719ZM712.719 68.9688V73H686.891V68.9688H687.688C688.781 68.9688 689.797 68.8906 690.734 68.7344C691.703 68.5781 692.531 68.2656 693.219 67.7969C693.938 67.2969 694.5 66.5938 694.906 65.6875C695.344 64.7812 695.562 63.5781 695.562 62.0781V32.125C695.562 30.7188 695.344 29.5938 694.906 28.75C694.5 27.875 693.938 27.2031 693.219 26.7344C692.5 26.2656 691.656 25.9531 690.688 25.7969C689.75 25.6406 688.75 25.5625 687.688 25.5625H687.406V21.5312H702.922L704.188 29.3125H704.656C705.656 27.5312 706.703 26.0781 707.797 24.9531C708.922 23.7969 710.094 22.9062 711.312 22.2812C712.562 21.625 713.875 21.1875 715.25 20.9688C716.656 20.7188 718.125 20.5938 719.656 20.5938C722.188 20.5938 724.438 20.9688 726.406 21.7188C728.406 22.4375 730.094 23.5625 731.469 25.0938C732.875 26.5938 733.938 28.5312 734.656 30.9062C735.406 33.2812 735.781 36.1094 735.781 39.3906V62.0781C735.781 63.5781 735.953 64.7812 736.297 65.6875C736.672 66.5938 737.188 67.2969 737.844 67.7969C738.5 68.2656 739.281 68.5781 740.188 68.7344C741.094 68.8906 742.078 68.9688 743.141 68.9688H743.469V73H726.734V39.8594C726.734 37.7656 726.547 35.9062 726.172 34.2812C725.797 32.6562 725.188 31.2812 724.344 30.1562C723.531 29.0312 722.453 28.1875 721.109 27.625C719.766 27.0312 718.125 26.7344 716.188 26.7344C714 26.7344 712.156 27.1562 710.656 28C709.188 28.8438 708 29.9844 707.094 31.4219C706.188 32.8594 705.531 34.5156 705.125 36.3906C704.75 38.2656 704.562 40.2344 704.562 42.2969V62.5469C704.562 63.9531 704.766 65.0938 705.172 65.9688C705.609 66.8125 706.188 67.4531 706.906 67.8906C707.625 68.3281 708.453 68.625 709.391 68.7812C710.359 68.9062 711.375 68.9688 712.438 68.9688H712.719ZM752.141 67.1406C752.141 65.8906 752.297 64.8594 752.609 64.0469C752.922 63.2031 753.344 62.5312 753.875 62.0312C754.438 61.5312 755.078 61.1719 755.797 60.9531C756.547 60.7344 757.344 60.625 758.188 60.625C759 60.625 759.766 60.7344 760.484 60.9531C761.234 61.1719 761.875 61.5312 762.406 62.0312C762.969 62.5312 763.406 63.2031 763.719 64.0469C764.062 64.8594 764.234 65.8906 764.234 67.1406C764.234 68.3594 764.062 69.3906 763.719 70.2344C763.406 71.0781 762.969 71.75 762.406 72.25C761.875 72.75 761.234 73.1094 760.484 73.3281C759.766 73.5469 759 73.6562 758.188 73.6562C757.344 73.6562 756.547 73.5469 755.797 73.3281C755.078 73.1094 754.438 72.75 753.875 72.25C753.344 71.75 752.922 71.0781 752.609 70.2344C752.297 69.3906 752.141 68.3594 752.141 67.1406Z"
        fill={fillPurple}
      />
    </Box>
  );
};

export default Logo;
