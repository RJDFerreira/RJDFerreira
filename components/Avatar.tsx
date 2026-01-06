import Image from 'next/image';

const Avatar = () => {
    return (
        <div className="relative w-32 h-32 md:w-64 md:h-64 overflow-hidden rounded-full">
            <Image
                src="/avatar.png"
                alt="Ricardo Ferreira"
                fill
                className="object-cover scale-110"
                priority
            />
        </div>
    );
};

export default Avatar;
