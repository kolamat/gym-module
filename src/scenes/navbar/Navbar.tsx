import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Links";
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import ActionButton from "../../shared/ActionButton";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1023px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-11`}>
            {/* LEFT-SIDE */}
            {/* <img src={Logo} alt="logo" /> */}

            <svg
              className="sm:hidden"
              width="50"
              height="50"
              viewBox="0 0 94 108"
              fill="#E1986F"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M54.0434 101.423L55.3836 102.908H57.384H72.616H82.8456L75.9332 95.3673L37.8715 53.8453L75.5678 12.2124L82.377 4.69202H72.232H57.512H55.4954L54.1533 6.19722L25.148 38.7274V9.19202V4.69202H20.648H9H4.5V9.19202V98.408V102.908H9H20.648H25.148V98.408V69.4065L54.0434 101.423Z"
                stroke="white"
                stroke-width="9"
              />
            </svg>

            <svg
              className="sm:w-[185px] h-[27px] sm:flex hidden whitespace-nowrap"
              width="99"
              height="17"
              viewBox="0 0 185 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.25 2.03125C22.3854 2.11458 20.6354 2.15625 20 2.15625C19.25 2.15625 17.7031 2.11458 15.3594 2.03125C15.2969 2.26042 15.2969 2.50521 15.3594 2.76562C16.4427 2.82812 17.1927 2.92188 17.6094 3.04688C18.026 3.17188 18.2344 3.42708 18.2344 3.8125C18.2344 4 18.1719 4.15104 18.0469 4.26562L9.1875 12.8125H8.09375C8.09375 9.96875 8.15625 7.11979 8.28125 4.26562C8.30208 3.47396 10.0417 2.97396 13.5 2.76562C13.5625 2.56771 13.5625 2.32292 13.5 2.03125C10.7708 2.11458 8.64062 2.15625 7.10938 2.15625C5.82812 2.15625 4.01042 2.11458 1.65625 2.03125C1.57292 2.21875 1.57292 2.46354 1.65625 2.76562C4.05208 2.99479 5.26042 3.49479 5.28125 4.26562C5.38542 6.71354 5.4375 9.625 5.4375 13C5.4375 16.3021 5.375 19.5885 5.25 22.8594C5.22917 23.6302 4.02083 24.1302 1.625 24.3594C1.54167 24.526 1.54167 24.7708 1.625 25.0938C3.39583 25.0312 5.21354 25 7.07812 25C9.29688 25 11.4271 25.0312 13.4688 25.0938C13.5521 24.9271 13.5521 24.6823 13.4688 24.3594C10.0104 24.151 8.27083 23.651 8.25 22.8594C8.14583 19.6094 8.09375 16.7083 8.09375 14.1562L9.34375 14.125L16.9531 22.0312C17.5156 22.625 17.7969 23.0469 17.7969 23.2969C17.7969 23.6615 17.6302 23.9271 17.2969 24.0938C16.9635 24.25 16.2969 24.3385 15.2969 24.3594C15.2135 24.6823 15.2135 24.9271 15.2969 25.0938V25.125C17.599 25.0417 19.5729 25 21.2188 25C23.625 25 25.5625 25.0312 27.0312 25.0938C27.1042 24.8646 27.1042 24.6198 27.0312 24.3594C24.6042 24.276 22.6562 23.5 21.1875 22.0312L11.5469 12.2656L19.9688 4.26562C20.5208 3.88021 21.1354 3.57812 21.8125 3.35938C22.5 3.13021 23.0625 2.98958 23.5 2.9375C23.9375 2.88542 24.5208 2.82812 25.25 2.76562C25.3125 2.50521 25.3125 2.26042 25.25 2.03125ZM26.0781 3.375C23.5781 3.54167 21.7865 4 20.7031 4.75L13.5312 11.5938L23.3594 21.5469C24.8281 23.0156 26.2917 23.7812 27.75 23.8438C27.9167 24.5312 27.9167 25.1719 27.75 25.7656C24.9271 25.599 20.625 25.599 14.8438 25.7656C14.6354 25.1719 14.6042 24.5312 14.75 23.8438C16.3542 23.8021 17.1562 23.6198 17.1562 23.2969C17.1562 23.1927 14.9375 20.8385 10.5 16.2344C10.5 18.1719 10.5521 20.3698 10.6562 22.8281C10.6562 22.8906 10.6823 22.9531 10.7344 23.0156C10.7865 23.0781 10.8594 23.1302 10.9531 23.1719C11.0573 23.2135 11.1615 23.2604 11.2656 23.3125C11.3698 23.3542 11.5104 23.3958 11.6875 23.4375C11.875 23.4792 12.0312 23.5156 12.1562 23.5469C12.2812 23.5781 12.4479 23.6094 12.6562 23.6406C12.875 23.6719 13.0469 23.6979 13.1719 23.7188C13.3073 23.7396 13.4844 23.7604 13.7031 23.7812C13.9323 23.8021 14.0885 23.8229 14.1719 23.8438C14.3281 24.5312 14.2969 25.1719 14.0781 25.7656C10.2344 25.6823 7.90104 25.6406 7.07812 25.6406C6.51562 25.6406 4.55208 25.6823 1.1875 25.7656C0.927083 25.0469 0.927083 24.375 1.1875 23.75C3.44792 23.5208 4.58854 23.2135 4.60938 22.8281C4.73438 20.224 4.79688 16.9479 4.79688 13C4.79688 9.64583 4.74479 6.74479 4.64062 4.29688C4.61979 3.91146 3.45833 3.60417 1.15625 3.375C0.979167 2.6875 1 2.01562 1.21875 1.35938C2.13542 1.35938 3.375 1.38542 4.9375 1.4375C6.51042 1.48958 7.60417 1.51562 8.21875 1.51562C8.66667 1.51562 9.5 1.50521 10.7188 1.48438C11.9375 1.46354 13.0156 1.45312 13.9531 1.45312C14.1406 2.04688 14.151 2.6875 13.9844 3.375C11.8073 3.58333 10.7083 3.89062 10.6875 4.29688C10.5833 6.45312 10.5208 8.57292 10.5 10.6562L17.5938 3.8125C17.5938 3.64583 16.7083 3.5 14.9375 3.375C14.7292 2.66667 14.7396 2.00521 14.9688 1.39062C18.75 1.55729 22.4531 1.57812 26.0781 1.45312C26.2448 2.04688 26.2448 2.6875 26.0781 3.375ZM42.0312 3.29688C41.2292 3.35938 40.5104 3.55208 39.875 3.875C39.2396 4.19792 38.6823 4.61979 38.2031 5.14062C37.724 5.65104 37.3125 6.23958 36.9688 6.90625C36.6354 7.5625 36.3594 8.26042 36.1406 9C35.9323 9.73958 35.776 10.5052 35.6719 11.2969C35.5781 12.0781 35.5312 12.849 35.5312 13.6094C35.5312 14.3698 35.5781 15.1458 35.6719 15.9375C35.776 16.7188 35.9375 17.4792 36.1562 18.2188C36.375 18.9583 36.651 19.6562 36.9844 20.3125C37.3281 20.9688 37.7396 21.5521 38.2188 22.0625C38.7083 22.5625 39.2656 22.9688 39.8906 23.2812C40.526 23.5938 41.2396 23.7812 42.0312 23.8438C42.8438 23.7812 43.5677 23.5938 44.2031 23.2812C44.8385 22.9583 45.3958 22.5469 45.875 22.0469C46.3646 21.5365 46.776 20.9531 47.1094 20.2969C47.4531 19.6302 47.7292 18.9323 47.9375 18.2031C48.1562 17.4635 48.3125 16.7031 48.4062 15.9219C48.5104 15.1302 48.5625 14.3594 48.5625 13.6094C48.5625 12.849 48.5104 12.0781 48.4062 11.2969C48.3125 10.5052 48.1562 9.73958 47.9375 9C47.7292 8.25 47.4531 7.54688 47.1094 6.89062C46.776 6.22396 46.3646 5.63542 45.875 5.125C45.3958 4.61458 44.8333 4.19792 44.1875 3.875C43.5521 3.55208 42.8333 3.35938 42.0312 3.29688ZM41.4844 24.5156C40.4531 24.5156 39.5312 24.3646 38.7188 24.0625C37.9062 23.75 37.1875 23.3333 36.5625 22.8125C35.9479 22.2812 35.4219 21.6615 34.9844 20.9531C34.5573 20.2448 34.2031 19.4896 33.9219 18.6875C33.651 17.875 33.4531 17.0365 33.3281 16.1719C33.2031 15.2969 33.1406 14.4427 33.1406 13.6094C33.1406 12.776 33.2031 11.9271 33.3281 11.0625C33.4531 10.1875 33.651 9.34375 33.9219 8.53125C34.1927 7.71875 34.5469 6.95312 34.9844 6.23438C35.4219 5.51562 35.9479 4.89062 36.5625 4.35938C37.1771 3.82812 37.8906 3.40625 38.7031 3.09375C39.526 2.78125 40.4531 2.625 41.4844 2.625C42.4323 2.625 43.2812 2.78125 44.0312 3.09375C44.7812 3.39583 45.4375 3.81771 46 4.35938C46.5729 4.89062 47.0625 5.51562 47.4688 6.23438C47.875 6.95312 48.2031 7.71875 48.4531 8.53125C48.7135 9.34375 48.901 10.1875 49.0156 11.0625C49.1406 11.9271 49.2031 12.776 49.2031 13.6094C49.2031 14.4427 49.1458 15.2917 49.0312 16.1562C48.9167 17.0104 48.7292 17.8438 48.4688 18.6562C48.2188 19.4583 47.8906 20.2188 47.4844 20.9375C47.0885 21.6458 46.6042 22.2656 46.0312 22.7969C45.4583 23.3281 44.7969 23.75 44.0469 24.0625C43.2969 24.3646 42.4427 24.5156 41.4844 24.5156ZM41.4844 25.6406C42.2031 25.6406 42.9792 25.5677 43.8125 25.4219C44.6458 25.276 45.474 25.026 46.2969 24.6719C47.1302 24.3177 47.9323 23.8438 48.7031 23.25C49.474 22.6562 50.151 21.9167 50.7344 21.0312C51.3281 20.1354 51.8021 19.0781 52.1562 17.8594C52.5104 16.6302 52.6875 15.2135 52.6875 13.6094C52.6875 12.0365 52.5104 10.6458 52.1562 9.4375C51.8125 8.21875 51.349 7.16146 50.7656 6.26562C50.1823 5.36979 49.5104 4.61979 48.75 4.01562C47.9896 3.41146 47.1927 2.92708 46.3594 2.5625C45.526 2.1875 44.6875 1.92188 43.8438 1.76562C43.0104 1.59896 42.224 1.51562 41.4844 1.51562C40.7656 1.51562 39.974 1.58854 39.1094 1.73438C38.2448 1.86979 37.375 2.11458 36.5 2.46875C35.625 2.8125 34.776 3.28125 33.9531 3.875C33.1302 4.46875 32.401 5.21354 31.7656 6.10938C31.1302 7.00521 30.6198 8.07292 30.2344 9.3125C29.849 10.5417 29.6562 11.974 29.6562 13.6094C29.6562 15.1927 29.8385 16.5885 30.2031 17.7969C30.5781 19.0052 31.0729 20.0573 31.6875 20.9531C32.3021 21.8385 33.0104 22.5833 33.8125 23.1875C34.625 23.7812 35.4688 24.2604 36.3438 24.625C37.2188 24.9896 38.099 25.25 38.9844 25.4062C39.8698 25.5625 40.7031 25.6406 41.4844 25.6406ZM42.0312 26.3438C39.9375 26.3438 38.0833 26.0365 36.4688 25.4219C34.8542 24.8177 33.4948 23.9635 32.3906 22.8594C31.2865 21.7448 30.4479 20.4062 29.875 18.8438C29.3021 17.2708 29.0156 15.526 29.0156 13.6094C29.0156 11.6927 29.3021 9.95312 29.875 8.39062C30.4479 6.81771 31.2865 5.47917 32.3906 4.375C33.4948 3.26042 34.8542 2.40104 36.4688 1.79688C38.0833 1.18229 39.9375 0.875 42.0312 0.875C44 0.875 45.7865 1.15625 47.3906 1.71875C49.0052 2.28125 50.3802 3.10417 51.5156 4.1875C52.6615 5.26042 53.5417 6.58854 54.1562 8.17188C54.7812 9.75521 55.0938 11.5677 55.0938 13.6094C55.0938 15.6615 54.7812 17.4792 54.1562 19.0625C53.5417 20.6354 52.6615 21.9635 51.5156 23.0469C50.3802 24.1302 49.0052 24.9479 47.3906 25.5C45.7865 26.0625 44 26.3438 42.0312 26.3438ZM64.8125 13C64.8125 10.4375 64.8646 7.52604 64.9688 4.26562C64.9896 3.47396 66.7292 2.97396 70.1875 2.76562C70.25 2.56771 70.25 2.32292 70.1875 2.03125C67.4583 2.11458 65.3281 2.15625 63.7969 2.15625C62.5156 2.15625 60.6979 2.11458 58.3438 2.03125C58.2604 2.21875 58.2604 2.46354 58.3438 2.76562C60.7396 2.99479 61.9479 3.49479 61.9688 4.26562C62.0729 6.71354 62.125 9.625 62.125 13C62.125 16.3021 62.0625 19.5885 61.9375 22.8594C61.9167 23.6302 60.7083 24.1302 58.3125 24.3594C58.25 24.6198 58.25 24.8646 58.3125 25.0938C60.3229 25.0312 64.9948 25 72.3281 25C74.8281 25 76.7031 24.5312 77.9531 23.5938C79.2031 22.6562 80.3698 21.0781 81.4531 18.8594C81.3698 18.6823 81.1875 18.5417 80.9062 18.4375C80.5 19.1875 80.0521 19.8542 79.5625 20.4375C79.0729 21.0208 78.4271 21.6094 77.625 22.2031C76.8229 22.7865 75.8229 23.2396 74.625 23.5625C73.4375 23.8854 72.0885 24.0469 70.5781 24.0469H64.9375C64.8542 20.3906 64.8125 16.7083 64.8125 13ZM67.1875 14.1562C67.1875 17.0104 67.2292 20.0938 67.3125 23.4062H70.5469C75.1719 23.4062 78.5312 21.4844 80.625 17.6406C81.5 17.9635 82.0521 18.3698 82.2812 18.8594C80.7917 21.3281 79.9167 23.5885 79.6562 25.6406H67.0469C62.9323 25.6406 59.875 25.6719 57.875 25.7344C57.6562 25.0573 57.6458 24.3958 57.8438 23.75C60.125 23.5208 61.276 23.2135 61.2969 22.8281C61.4219 19.5573 61.4844 16.2812 61.4844 13C61.4844 9.64583 61.4323 6.74479 61.3281 4.29688C61.3073 3.91146 60.1458 3.60417 57.8438 3.375C57.6667 2.6875 57.6875 2.01562 57.9062 1.35938C59.7188 1.46354 62.0521 1.51562 64.9062 1.51562C65.3333 1.51562 66.1875 1.50521 67.4688 1.48438C68.75 1.46354 69.8698 1.45312 70.8281 1.45312C71.026 2.04688 71.0365 2.6875 70.8594 3.375C68.5573 3.60417 67.3958 3.91146 67.375 4.29688C67.25 6.90104 67.1875 10.1875 67.1875 14.1562ZM86.25 16.6094V18.5625H95.7656V16.6094H86.25ZM85.6094 19.2031V15.9688H97.5156V19.2031H85.6094ZM114.219 1.51562C113.219 1.51562 112.203 1.625 111.172 1.84375C110.151 2.05208 109.078 2.44271 107.953 3.01562C106.839 3.58854 105.854 4.3125 105 5.1875C104.146 6.0625 103.443 7.22917 102.891 8.6875C102.339 10.1354 102.062 11.776 102.062 13.6094C102.062 15.4427 102.339 17.0885 102.891 18.5469C103.443 19.9948 104.146 21.151 105 22.0156C105.854 22.8698 106.839 23.5833 107.953 24.1562C109.078 24.7188 110.151 25.1042 111.172 25.3125C112.203 25.5312 113.219 25.6406 114.219 25.6406C115.792 25.6406 117.203 25.4896 118.453 25.1875C119.703 24.8958 121.12 24.4375 122.703 23.8125C122.234 22.5312 122 20.9115 122 18.9531V16.6406C122 15.8802 123.734 15.3802 127.203 15.1406C127.318 14.8906 127.318 14.6458 127.203 14.4062C124.474 14.4896 122.344 14.5312 120.812 14.5312C119.531 14.5312 117.719 14.4896 115.375 14.4062C115.302 14.6458 115.302 14.8906 115.375 15.1406C117.781 15.3802 118.984 15.8802 118.984 16.6406V22.9844C118.089 24.0052 116.5 24.5156 114.219 24.5156C113 24.5156 111.891 24.2917 110.891 23.8438C109.891 23.3958 109.062 22.8073 108.406 22.0781C107.76 21.3385 107.219 20.4844 106.781 19.5156C106.344 18.5469 106.026 17.5729 105.828 16.5938C105.641 15.6042 105.547 14.6094 105.547 13.6094C105.547 12.3281 105.703 11.0781 106.016 9.85938C106.339 8.63021 106.823 7.46354 107.469 6.35938C108.125 5.24479 109.031 4.34375 110.188 3.65625C111.354 2.96875 112.698 2.625 114.219 2.625C115.24 2.625 116.188 2.78646 117.062 3.10938C117.938 3.43229 118.656 3.8125 119.219 4.25C119.792 4.6875 120.344 5.27604 120.875 6.01562C121.406 6.74479 121.807 7.38021 122.078 7.92188C122.359 8.45312 122.693 9.13021 123.078 9.95312C123.401 9.91146 123.594 9.79688 123.656 9.60938C122.885 6.51562 121.719 4.39583 120.156 3.25C118.604 2.09375 116.625 1.51562 114.219 1.51562ZM122.703 10.6562C122.255 9.65625 121.844 8.83333 121.469 8.1875C121.094 7.53125 120.589 6.80208 119.953 6C119.328 5.1875 118.583 4.55729 117.719 4.10938C116.854 3.66146 115.891 3.39062 114.828 3.29688C113.609 3.36979 112.536 3.73958 111.609 4.40625C110.682 5.0625 109.964 5.90625 109.453 6.9375C108.943 7.96875 108.562 9.04688 108.312 10.1719C108.062 11.2865 107.938 12.4323 107.938 13.6094C107.938 15.2344 108.156 16.7865 108.594 18.2656C109.031 19.7448 109.797 21.0521 110.891 22.1875C111.995 23.3125 113.349 23.875 114.953 23.875C116.443 23.875 117.573 23.4948 118.344 22.7344V16.6406C118.344 16.2865 117.182 15.9896 114.859 15.75C114.578 15.0208 114.599 14.349 114.922 13.7344C118.036 13.8802 122.344 13.9115 127.844 13.8281C128.083 14.4531 128.094 15.0938 127.875 15.75C125.552 15.9896 124.391 16.2865 124.391 16.6406V18.9531C124.391 20.849 124.688 22.599 125.281 24.2031C123.812 24.7552 122.719 25.1354 122 25.3438C121.292 25.5625 120.26 25.7708 118.906 25.9688C117.552 26.1771 115.99 26.2812 114.219 26.2812C113.146 26.2812 112.073 26.1667 111 25.9375C109.927 25.7188 108.802 25.3125 107.625 24.7188C106.448 24.1146 105.411 23.3594 104.516 22.4531C103.62 21.5469 102.88 20.3333 102.297 18.8125C101.714 17.2812 101.422 15.5469 101.422 13.6094C101.422 11.6719 101.708 9.94271 102.281 8.42188C102.854 6.89062 103.583 5.66667 104.469 4.75C105.354 3.83333 106.375 3.07292 107.531 2.46875C108.698 1.85417 109.812 1.4375 110.875 1.21875C111.948 0.989583 113.021 0.875 114.094 0.875C115.823 0.875 117.74 1.09375 119.844 1.53125C121.958 1.96875 123.302 2.21875 123.875 2.28125C123.542 3.625 123.411 4.80729 123.484 5.82812C123.557 6.83854 123.849 8.07812 124.359 9.54688C124.057 10.1615 123.505 10.5312 122.703 10.6562ZM143.578 22.7969C143.599 23.1823 144.76 23.4896 147.062 23.7188C147.208 24.3333 147.188 24.9948 147 25.7031C144.135 25.6615 141.979 25.6406 140.531 25.6406C139.104 25.6406 136.958 25.6615 134.094 25.7031C133.76 25.0885 133.76 24.4271 134.094 23.7188C136.365 23.4896 137.51 23.1927 137.531 22.8281C137.635 19.9427 137.698 17.3594 137.719 15.0781L131.891 4.9375C131.38 4.08333 130.177 3.5625 128.281 3.375C128.198 3.05208 128.156 2.73958 128.156 2.4375C128.156 2.11458 128.219 1.76562 128.344 1.39062C130.542 1.47396 133.13 1.51562 136.109 1.51562C138.266 1.51562 139.859 1.49479 140.891 1.45312C140.995 1.80729 141.047 2.11458 141.047 2.375C141.047 2.67708 140.995 3.02083 140.891 3.40625C139.776 3.48958 139.005 3.58333 138.578 3.6875C138.151 3.79167 137.938 3.95312 137.938 4.17188C137.938 4.23438 139.208 6.54688 141.75 11.1094C144.583 6.40104 146 4.02083 146 3.96875C146 3.86458 145.938 3.77083 145.812 3.6875C145.688 3.60417 145.516 3.53646 145.297 3.48438C145.089 3.43229 144.891 3.39583 144.703 3.375C144.526 3.35417 144.318 3.33333 144.078 3.3125C143.849 3.28125 143.714 3.26562 143.672 3.26562C143.495 2.71354 143.526 2.08854 143.766 1.39062C145.682 1.47396 147.109 1.51562 148.047 1.51562C148.922 1.51562 150.193 1.47396 151.859 1.39062C152.099 2.10938 152.099 2.77083 151.859 3.375C150.255 3.52083 149.198 4 148.688 4.8125L143.406 13.2812C143.406 17.5104 143.464 20.6823 143.578 22.7969ZM138.172 22.8594C138.141 23.6302 136.932 24.1302 134.547 24.3594C134.443 24.6198 134.443 24.875 134.547 25.125C139.151 25.0417 143.099 25.0312 146.391 25.0938C146.474 24.8854 146.474 24.6302 146.391 24.3281C142.932 24.1198 141.193 23.6302 141.172 22.8594C141.068 19.8698 141.016 17.5521 141.016 15.9062L148.156 4.48438C148.771 3.48438 149.854 2.91146 151.406 2.76562C151.5 2.58854 151.5 2.34375 151.406 2.03125C150.24 2.09375 149.057 2.125 147.859 2.125C146.776 2.125 145.562 2.09375 144.219 2.03125C144.125 2.19792 144.125 2.44271 144.219 2.76562C145.75 2.93229 146.568 3.27083 146.672 3.78125C146.714 3.97917 146.651 4.21354 146.484 4.48438L140.828 13.8281L135.703 4.6875C135.339 4 135.448 3.54688 136.031 3.32812C136.625 3.09896 138.042 2.91146 140.281 2.76562C140.365 2.46354 140.365 2.21875 140.281 2.03125C137.208 2.17708 133.375 2.17708 128.781 2.03125C128.698 2.21875 128.698 2.46354 128.781 2.76562C130.625 2.93229 131.854 3.57292 132.469 4.6875L138.359 14.9531C138.339 17.401 138.276 20.0365 138.172 22.8594ZM157.984 22.625C157.943 23.5729 156.792 24.151 154.531 24.3594C154.448 24.526 154.448 24.7708 154.531 25.0938C156.5 25.0312 157.896 25 158.719 25C160.021 25 161.505 25.0312 163.172 25.0938C163.255 24.7708 163.255 24.526 163.172 24.3594C160.891 24.151 159.74 23.5729 159.719 22.625C159.615 19.3854 159.562 16.5625 159.562 14.1562C159.562 10.8646 159.604 7.95312 159.688 5.42188H159.844L167.469 24.6094H167.625L174.75 5.79688H174.891C174.995 8.93229 175.047 11.7188 175.047 14.1562C175.047 17.5417 174.995 20.4323 174.891 22.8281C174.87 23.099 174.745 23.3333 174.516 23.5312C174.297 23.7188 173.969 23.8698 173.531 23.9844C173.094 24.0885 172.724 24.1615 172.422 24.2031C172.12 24.2448 171.734 24.2865 171.266 24.3281C171.182 24.4948 171.182 24.7396 171.266 25.0625C173.036 25 174.849 24.9688 176.703 24.9688C178.922 24.9688 181.057 25 183.109 25.0625C183.193 24.875 183.193 24.6302 183.109 24.3281C179.651 24.1198 177.911 23.6302 177.891 22.8594C177.766 19.5885 177.703 16.3021 177.703 13C177.703 9.80208 177.745 6.89062 177.828 4.26562C177.849 3.49479 179.589 3.00521 183.047 2.79688C183.13 2.49479 183.13 2.25 183.047 2.0625C180.995 2.125 178.266 2.15625 174.859 2.15625L168.203 19.5312L161.797 2.15625C159.255 2.15625 157.005 2.11458 155.047 2.03125C154.943 2.23958 154.943 2.4375 155.047 2.625C156.286 2.80208 157.094 3.0625 157.469 3.40625C157.854 3.73958 158.057 4.51562 158.078 5.73438C158.151 8.29688 158.188 10.7188 158.188 13C158.188 16.1562 158.12 19.3646 157.984 22.625ZM157.344 22.625C157.479 19.3438 157.547 16.1354 157.547 13C157.547 10.7188 157.51 8.29688 157.438 5.73438C157.417 4.77604 157.229 4.16146 156.875 3.89062C156.531 3.60938 155.781 3.39062 154.625 3.23438C154.333 2.59896 154.344 1.97396 154.656 1.35938C157.052 1.46354 160.167 1.51562 164 1.51562L169.125 15.2031L174.406 1.51562C177.198 1.51562 180.281 1.47396 183.656 1.39062C183.865 2.06771 183.885 2.73958 183.719 3.40625C181.417 3.63542 180.255 3.94271 180.234 4.32812C180.141 6.28646 180.094 9.17708 180.094 13C180.094 16.9479 180.161 20.2135 180.297 22.7969C180.318 23.1823 181.479 23.4896 183.781 23.7188C183.948 24.3854 183.927 25.0573 183.719 25.7344C180.344 25.651 178.38 25.6094 177.828 25.6094C176.995 25.6094 174.661 25.651 170.828 25.7344C170.568 25.0052 170.568 24.3333 170.828 23.7188C173.089 23.4896 174.229 23.1927 174.25 22.8281C174.354 20.3906 174.406 17.5 174.406 14.1562C174.406 11.5521 174.396 9.64062 174.375 8.42188L168.062 25.25H167.016L160.203 8.07812V14.1562C160.203 16.5625 160.255 19.3854 160.359 22.625C160.38 23.1875 161.521 23.5625 163.781 23.75C164.042 24.375 164.042 25.0469 163.781 25.7656C160.667 25.6406 157.432 25.6406 154.078 25.7656C153.828 25.0469 153.828 24.375 154.078 23.75C156.234 23.5417 157.323 23.1667 157.344 22.625Z"
                fill="#DAA262"
              />
            </svg>

            {/* RIGHT-SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                {/* INNER-LEFT-SIDE */}
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our_Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact_Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                {/* INNER-RIGHT-SIDE */}
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign_Up</p>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become_a_Member
                  </ActionButton>
                </div>
              </div>
            ) : (
              <button
                title="Menu-Bar"
                type="button"
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE-MENU */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE-ICON */}
          <div className="flex justify-end p-12">
            <button
              title="Menu-Bar"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* MENU-ITEMS */}

          {/* MOBILE-MENU */}
          <div className="ml-[33%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our_Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact_Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
