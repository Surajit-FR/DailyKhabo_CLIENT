import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "redux";
import { getPolicy } from "../../services/slices/UtilitySlice";
import DOMPurify from 'dompurify';

const PrivacyPolicyPage = (): JSX.Element => {
    const { policy_data } = useSelector((state: any) => state.utilitySlice);
    const dispatch: Dispatch<any> = useDispatch();

    useEffect(() => {
        dispatch(getPolicy({ policyName: "Privacy Policy" }));
    }, [dispatch]);

    // Function to modify the description to bold the first string of each paragraph
    const formatDescription = (description: string) => {
        const paragraphs = description?.split(/<\/?p>/).filter(Boolean);
        return paragraphs?.map((para, index) => {
            if (index % 2 === 1) { // Only modify actual paragraph content
                return `<p><strong>${para.trim()}</strong></p>`;
            }
            return `<p>${para}</p>`;
        }).join('');
    };

    const formattedDescription = formatDescription(policy_data.description);
    const sanitizedDescription = DOMPurify.sanitize(formattedDescription);

    return (
        <>
            <div style={{ padding: "1.5rem" }}>
                <h2>{policy_data.policyName}</h2>
                <div dangerouslySetInnerHTML={{ __html: sanitizedDescription }} />
            </div>
        </>
    );
};

export default PrivacyPolicyPage;