import Avatar from '@/components/ui/Avatar'
import acronym from '@/utils/acronym'
import { colors } from '@/constants/colors.constant'
import { LuBan, LuCheck, LuCircleUser, LuSettings } from 'react-icons/lu'
import type { NotificationActor, NotificationPayload } from './types'
import classNames from '@/utils/classNames'

const imagePath = '/img/avatars/'

type NotificationAvatarProps = {
    type: string
    actor: NotificationActor
    payload: NotificationPayload
}

const GeneratedAvatar = ({ name }: { name: string }) => {
    return (
        <Avatar shape="circle" size={30}>
            {acronym(name)}
        </Avatar>
    )
}

const UserAvatar = ({ actor }: { actor: NotificationActor }) => {
    if (!actor) return <Avatar shape="circle" size={30} />

    if (actor.avatar) {
        return (
            <Avatar
                shape="circle"
                size={30}
                src={`${imagePath}${actor.avatar}`}
            />
        )
    }
    return <GeneratedAvatar name={actor.name} />
}

const SystemAvatar = ({
    icon,
    className,
}: {
    icon: React.ReactNode
    className: string
}) => {
    return <Avatar shape="circle" size={30} className={className} icon={icon} />
}

const NotificationAvatar = ({
    type,
    actor,
    payload,
}: NotificationAvatarProps) => {
    // User-initiated notification types
    const userTypes = [
        'COMMENT_MENTION',
        'COMMENT',
        'MEETING_INVITED',
        'TASK_ASSIGNED',
        'FILE_SHARED',
    ]

    if (userTypes.includes(type) && actor) {
        return <UserAvatar actor={actor} />
    }

    switch (type) {
        case 'ACCESS_REQUESTED':
            return (
                <SystemAvatar
                    icon={<LuCircleUser className="text-lg" />}
                    className={classNames(
                        'border-0',
                        colors.purple.iconBg,
                        colors.purple.iconText,
                    )}
                />
            )

        case 'STATUS_UPDATE': {
            const isSuccess = payload.status === 'approved'
            return (
                <SystemAvatar
                    icon={
                        isSuccess ? (
                            <LuCheck className="text-lg" />
                        ) : (
                            <LuBan className="text-lg" />
                        )
                    }
                    className={classNames(
                        'border-0',
                        isSuccess
                            ? `${colors.emerald.iconBg} ${colors.emerald.iconText}`
                            : `${colors.red.iconBg} ${colors.red.iconText}`,
                    )}
                />
            )
        }
        case 'SYSTEM':
            return (
                <SystemAvatar
                    icon={<LuSettings className="text-lg" />}
                    className={classNames(
                        'border-0',
                        colors.blue.iconBg,
                        colors.blue.iconText,
                    )}
                />
            )

        default:
            return <Avatar shape="circle" size={25} />
    }
}

export default NotificationAvatar
