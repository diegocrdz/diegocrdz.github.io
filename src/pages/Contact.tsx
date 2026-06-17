import Title from '@/components/Title'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
    Field,
    FieldLabel,
    FieldSet,
} from '@/components/ui/field'
import { Textarea } from '@/components/ui/textarea'
import { Mail, ArrowUpRight } from 'lucide-react'

const links = [
    { name: 'GitHub', href: 'https://github.com/diegocrdz', icon: <Mail /> },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/diegocrdz', icon: <Mail /> },
    { name: 'Email', href: 'mailto:diegocordova.rdz@gmail.com', icon: <Mail /> },
]

const Contact = () => {
    const { t } = useTranslation()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    
    const handleSubmit = () => {
        const subject = encodeURIComponent(`Portfolio contact from ${name}`)
        const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
        window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`
    }
    
    return (
        <section className="max-w-4xl mx-auto px-6 py-16">
            <Title title="pages.contact.title" />
            <div className="flex gap-3 mb-12">
                {links.map((link) => (
                    <Button variant="outline" asChild key={link.name}>
                        <a href={link.href} target="_blank" className="flex items-center gap-2">
                            {link.icon}
                            {link.name}
                            <ArrowUpRight className="h-3 w-3" />
                        </a>
                    </Button>
                ))}
            </div>

            <h2 className="text-2xl font-medium mb-4">
                {t('pages.contact.form.title')}
            </h2>
            <FieldSet>
                <Field>
                    <FieldLabel>{t('pages.contact.form.name')}</FieldLabel>
                    <Input
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={t('pages.contact.form.namePlaceholder')}
                    />
                </Field>
                <Field>
                    <FieldLabel>{t('pages.contact.form.email')}</FieldLabel>
                    <Input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={t('pages.contact.form.emailPlaceholder')}
                    />
                </Field>
                <Field>
                    <FieldLabel>{t('pages.contact.form.message')}</FieldLabel>
                    <Textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder={t('pages.contact.form.messagePlaceholder')}
                        rows={5}
                    />
                </Field>
                <Button onClick={handleSubmit} className="self-start">
                    {t('pages.contact.form.submit')}
                </Button>
            </FieldSet>
        </section>
    )
}

export default Contact